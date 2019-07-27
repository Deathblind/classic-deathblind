module.exports = (storybookBaseConfig, configType, defaultConfig) => {
  defaultConfig.module.rules[0].test = /\.(mjs|jsx?|tsx?)$/;

  return defaultConfig;
};
