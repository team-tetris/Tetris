module.exports = {
  "presets": ["@babel/preset-react", "@babel/preset-env"],
  "plugins": [
    [
      "@babel/plugin-proposal-class-properties",
      {
        "loose": true
      }
    ],
    "@babel/plugin-transform-react-jsx",
    ["transform-react-remove-prop-types", {
    "mode": "wrap",
    "ignoreFilenames": ["node_modules"]
  }]]
}