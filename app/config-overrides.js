const {
  override,
  addBabelPlugins,
  addWebpackPlugin,
} = require("customize-cra");

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = override(
  addBabelPlugins([
    "babel-plugin-root-import",
    { rootPathSuffix: "./src", rootPathPrefix: "~/" },
  ]),
  addWebpackPlugin(
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      uglifyOptions: {
        warnings: false,
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    }),
  ),
  // addWebpackPlugin(new BundleAnalyzerPlugin())
);
