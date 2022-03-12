import path from "path";
import htmlWebpackPlugin from "html-webpack-plugin";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath (import.meta.url);
const __dirname = dirname(__filename);

const htmlPageNames = ['headphones', 'speakers', 'earphones', 'xx99-mark-ii', 'xx99-mark-i', 'xx59', 'zx9', 'zx7', 'yx1', 'checkout'];
const multiplePlugins = htmlPageNames.map(htmlFileName => {
  return new htmlWebpackPlugin ({
    template: `./src/${htmlFileName}.html`,
    filename: `${htmlFileName}.html`,
    inject: true,
  })
});

const config = {
  entry: path.resolve(__dirname, 'src', 'script.js'),
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
      filename: `index.html`,
      inject: true,
    }),        
  ].concat(multiplePlugins),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },   
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },     
    ],
  },
};

export default config;