const path = require("path");

module.exports = {
  images: {
    domains: ["pbs.twimg.com"],
  },
  sassOptions: {
    cssModules: true,
    includePaths: [path.join(__dirname, "/src/styles")],
  },
  env: {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    apiHost: process.env.API_HOST,
  },
  trailingSlash: true,
};
