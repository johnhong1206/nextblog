module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_GRAPHCMS_ENDPOINT: process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT,
    GRAPHCMS_TOKEN: process.env.GRAPHCMS_TOKEN,
  },
};
