const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (env) {
  const isProd = !!env.production;

  const entry = [path.resolve(__dirname) + '/src/index.tsx'];

  return {
    mode: isProd ? 'production' : 'development',
    entry: entry,
    devtool: "source-map",
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    output: {
      filename: 'app.bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader'
            }
          ]
        },
        {
          test: /\.js(x?)$/,
          enforce: 'pre',
          exclude: /node_modules/,
          use: [
            {
              loader: 'source-map-loader'
            },
            {
              loader: 'babel-loader'
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({ template: 'src/index.html' })
    ],
    // externals: {
    //   'react': 'React',
    //   'react-dom': 'ReactDOM'
    // }
  };
}