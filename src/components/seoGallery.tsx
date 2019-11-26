import React from "react";
import { Helmet } from "react-helmet";

import screenshot from "../images/screen.png";

const title = `Галерея новогодние подарков от Сказки в Кокшетау и Костанай`;
const description = `Сладкие новогодние подарки для детей, оптом и в розницу в городе Кокшетау, Костанай и Петропавловск с бесплатной доставкой. Новогодние кульки с конфетами. Подарки с продукцией Рахат, Баян-Сулу, Славянка и другие. Огромный выбор для любого бюджета. Индивидуальная система скидок. Бесплатная доставка по городу и по области. `;
const canonicalUrl = `https://www.skazka-podarki.kz`;

const SeoGallery: React.FC = () => {
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
      <meta property="og:image" content={screenshot} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />

      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={screenshot} />
      <meta property="twitter:url" content={canonicalUrl} />
    </Helmet>
  );
};

export default SeoGallery;
