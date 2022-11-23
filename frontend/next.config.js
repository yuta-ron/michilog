const path = require('path');

module.exports = {
  images: {
    domains: ['pbs.twimg.com'],
  },
  sassOptions: {
    cssModules: true,
    includePaths: [path.join(__dirname, '/src/styles')],
  },
  env: {
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    apiHost: process.env.API_HOST,
  },
  trailingSlash: true,
};
