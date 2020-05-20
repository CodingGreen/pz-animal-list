module.exports = {
  siteMetadata: {
    title: 'Unofficial Planet Zoo Animal List',
    description: 'This unofficial tool for the game Planet Zoo allows players to sort and filter the animals in the game to find the perfect animals to add to their zoo.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Unofficial Planet Zoo Animal List',
        short_name: 'PZ Animal List',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#007bff',
        display: 'minimal-ui',
        icon: 'src/images/icon.svg',
      },
    },
    'gatsby-plugin-offline',
  ],
};
