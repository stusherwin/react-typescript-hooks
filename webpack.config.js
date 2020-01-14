let path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "production",

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
      extensions: [".ts", ".tsx"],
  },

  entry: [
    './src/style.css',
    './src/index.tsx'
  ],

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],

  devServer: {
    publicPath: "/dist/",
    compress: true,
    port: 9010
  },

  module: {
      rules: [
          {
              test: /\.ts(x?)$/,
              exclude: /node_modules/,
              use: [
                  {
                      loader: "ts-loader"
                  }
              ]
          },
          {
              enforce: "pre",
              test: /\.js$/,
              loader: "source-map-loader"
          },
          {
              test: /\.css$/,
              exclude: /node_modules/,
              use: [ 
                  MiniCssExtractPlugin.loader,
                  { loader: 'css-loader', options: { importLoaders: 1 } },
                  'postcss-loader' 
              ]
          }
      ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
      "react": "React",
      "react-dom": "ReactDOM"
  }
};