import { ReactNode } from "react";
import { useStaticQuery, graphql } from "gatsby";
import MarkdownRemarkContext, {
  MarkdownRemarkElement, MarkdownRemarkFrontmatter,
} from "../context/MarkdownRemarkDataContext";

/**
 * DataProvider is a static context provider for `MarkdownRemarkDataContext`.
 * @param {{ children: React.ReactNode }} props DataProvider props.
 */

interface Props {
  children: ReactNode;
}

export default function DataProvider({ children}: Props) {
  const data = useStaticQuery(graphql`
    {
      allFile {
        nodes {
          sourceInstanceName
          childMarkdownRemark {
            id
            rawMarkdownBody
            frontmatter {
              ...Callout
              ...FeaturedNews
              ...FeaturedSolution
              ...Partner
            }
            fields {
              readingTime {
                text
              }
            }
          }
        }
      }
    }
  `);

  const elements : Array<MarkdownRemarkElement> = data.allFile.nodes.map(
    (node: {
      childMarkdownRemark: {
        id: string;
        rawMarkdownBody: string;
        frontmatter: MarkdownRemarkFrontmatter;
        fields: { readingTime: { text: string } };
      };
      sourceInstanceName: string;
    }) : MarkdownRemarkElement => ({
      id: node.childMarkdownRemark?.id,
      body: node.childMarkdownRemark?.rawMarkdownBody,
      data: node.childMarkdownRemark?.frontmatter,
      readTime: node.childMarkdownRemark?.fields.readingTime.text,
      type: node.sourceInstanceName,
    })
  );

  return (
    <MarkdownRemarkContext.Provider value={{ elements }}>
      {children}
    </MarkdownRemarkContext.Provider>
  );
}


