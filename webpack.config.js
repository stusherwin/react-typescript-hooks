let path = require('path');

module.exports = {
  mode: "production",

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
      extensions: [".ts", ".tsx"],
  },

  entry: [
    './src/index.tsx'
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
      ]
  },

  externals: {
      "react": "React",
      "react-dom": "ReactDOM"
  }
};