import { Helmet } from "react-helmet";


interface Props {
  title: string;
  canonical_url: string;
  description: string;
}
const SEO=({title, canonical_url, description}:Props) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>
        {title ? `iTEAM Consulting | ${title}` : "iTEAM Consulting"}
      </title>
      {canonical_url && <link rel="canonical_url" href={canonical_url} />}
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
}
export default SEO 