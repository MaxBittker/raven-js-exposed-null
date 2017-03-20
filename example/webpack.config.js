
module.exports = {
  entry: {
    example: "./example.js",
  },
  output: {
   filename: "[name]-bundle.js",
   sourceMapFilename: "[name]-bundle.js.map",
 },
 devtool: 'source-map',
 module: {
  loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
      query: {
        presets: ['react']
      }
    }]
  }
}
