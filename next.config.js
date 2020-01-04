module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      "/": { page: "/" },
    };
  }

  // For GitHub Pages without custom domain: 
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/my-website/' : '',
};
