module.exports = {
  siteMetadata: {
    title: 'Zippo-days',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown',
        path: './src/markdown/',
      },
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true, // defaults to false
        jsxPragma: 'jsx', // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Abril Fatface',
          'Noto Serif KR',
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  ],
};
