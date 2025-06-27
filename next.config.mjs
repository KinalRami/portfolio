const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export', // important for static HTML export
  basePath: isProd ? '/portfolio' : '',
  assetPrefix: isProd ? '/portfolio/' : '',
};
