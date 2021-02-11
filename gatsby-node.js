// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@src': path.resolve(__dirname, 'src'),
      }
    }
  });
};
