export default {
  title: "Scarlet",
  description: "Documentation",
  themeConfig: {
    mode: "dark",
    colors: {
      primary: "#1076e5"
    }
  },
  dest: "dist/documentation",
  port: 3002,
  typescript: true,
  modifyBundlerConfig: config => config,
  plugins: []
};
