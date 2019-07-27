module.exports = {
  "*.{ts,js,jsx,json,css,md}": [
    "prettier --config config/lint-staged/lint-staged.config.js --write",
    "git add"
  ]
};
