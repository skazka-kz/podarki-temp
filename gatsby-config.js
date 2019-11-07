module.exports = {
  siteMetadata: {
    title: `Сказка Подарки Кокшетау Петропавловск Костанай`,
    description: `Сказка Подарки Кокшетау Петропавловск Костанай`,
    author: `@slavabez`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#922c27`,
        theme_color: `#922C27`,
        display: `minimal-ui`,
        icon: `src/images/skazka_logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-extract-schema`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Pacifico`,
            subsets: ['cyrillic']
          },
          {
            family: `Playfair Display`,
            variants: [`700`],
          },
        ],
      },
    },
  ],
};
