/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { Helmet } from "react-helmet";

import cover from "../images/cover.png";

const title = `Новогодние подарки от Сказки в Кокшетау и Костанай`;
const description = `Сладкие новогодние подарки для детей, оптом и в розницу в городе Кокшетау, Костанай и Петропавловск с бесплатной доставкой. Новогодние кульки с конфетами. Подарки с продукцией Рахат, Баян-Сулу, Славянка и другие. Огромный выбор для любого бюджета. Индивидуальная система скидок. Бесплатная доставка по городу и по области.`;
const canonicalUrl = `https://www.skazka-podarki.kz`;

const SEO: React.FC = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <html lang="ru" />
      <title>{title}</title>
      <link rel="canonical" href={canonicalUrl} />
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={cover} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />

      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={cover} />
      <meta property="twitter:url" content={canonicalUrl} />
    </Helmet>
  );
};

export default SEO;
