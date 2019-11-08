/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import { oc } from "ts-optchain";

type MetaProps = JSX.IntrinsicElements["meta"];

interface Props {
  description?: string;
  lang?: string;
  meta?: MetaProps[];
  title: string;
}

const SEO: React.FC<Props> = ({ description, lang, meta, title }) => {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | `}
      meta={[
        {
          name: `description`,
          content: "metaDescription",
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: "metaDescription",
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: "",
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: "",
        },
        // @ts-ignore
      ].concat(meta)}
    />
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

export default SEO;
