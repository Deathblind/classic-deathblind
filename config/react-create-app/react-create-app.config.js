const { injectBabelPlugin } = require("react-app-rewired");
const rewirePostCSS = require("react-app-rewire-postcss");
const postcssNormalize = require("postcss-normalize");
const autoprefixer = require("autoprefixer");

module.exports = (config, environment) => {
  rewirePostCSS(config, {
    plugins: () => [postcssNormalize({ forceImport: true }), autoprefixer()]
  });

  config = injectBabelPlugin(
    [
      "babel-plugin-styled-components",
      {
        displayName: environment === "development",
        minify: environment !== "development",
        pure: true
      }
    ],
    config
  );

  config = injectBabelPlugin("add-react-displayname");

  return config;
};
