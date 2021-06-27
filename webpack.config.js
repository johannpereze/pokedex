const path = require("path");

const babelRules = {
  test: /\.m?js$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env"],
      plugins: ["@babel/plugin-transform-runtime"],
    },
  },
};

module.exports = {
  //aquí podemos poner un entry: si no queremos usar el './src/index.js',  por defecto
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js", //aquí es posible que necesites un [contenthash]
    assetModuleFilename: "assets/images/[hash][ext][query]",
  },
  resolve: {
    extensions: [".js"], //aquí le decimos qué extensiones vamos a estar utilizando
  },
  module: {
    rules: [babelRules],
  },
};
