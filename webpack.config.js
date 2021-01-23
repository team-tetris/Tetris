const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { merge } = require('webpack-merge')
const modeConfig = mode => require(`./config/webpack.${mode}`)(mode);

module.exports = (env, { mode }) => {

  return merge({
    mode,
    entry: './src/index.js',
    output: {
      filename: 'tetris.js',
      path: path.resolve(__dirname, 'dist'),
      library: 'tetris',
      libraryTarget: 'umd'
    },
    plugins: [new CleanWebpackPlugin()],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
          include: path.resolve(__dirname, './src')
        }
      ]
    }
  },
    modeConfig(mode)
  )
}