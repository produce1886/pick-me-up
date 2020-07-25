const withSourceMaps = require("@zeit/next-source-maps");
const { parsed: localEnv } = require("dotenv").config();
const webpack = require("webpack");

module.exports = withSourceMaps({
  webpack: (config) => {
    config.node = { fs: "empty" };
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv || process.env));
    return config;
  },
});
