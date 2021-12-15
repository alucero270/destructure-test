import { createContext } from "react";
import { CalloutType } from "../layouts/companyCallouts/Callout";
import { PartnerType } from "../layouts/partnerships/Partner";
import { SolutionType } from "../pages/solutions/FeaturedSolution";

export type MarkdownRemarkFrontmatter = 
  |CalloutType
  |SolutionType
  |PartnerType
  ;


export interface MarkdownRemarkElement {
  id: string;
  body: string;
  data: MarkdownRemarkFrontmatter ;
  readTime: string;
  type: string;
};

export type MarkdownRemarkData = {
  elements: Array<MarkdownRemarkElement>;
};

export default createContext<MarkdownRemarkData>({ elements: [] });