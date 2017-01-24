module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "./build/build.js",
    library: "./build/public"
  },
  watch: true,
  devtool: '#source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
        {
            test:   /\.styl$/,
            loader: 'style!css!stylus?resolve url'
        },
        {
        test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
        loader: 'file?name=[name].[ext]?[hash]'
        }

    ]
  }
}
