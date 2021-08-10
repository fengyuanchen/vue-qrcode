const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/dist/plugin').default;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const markdownItAnchor = require('markdown-it-anchor');

module.exports = (env) => ({
  mode: env.production ? 'production' : 'development',
  entry: './docs',
  output: {
    path: path.resolve(__dirname, './docs/dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.md$/,
        use: [
          'vue-loader',
          {
            loader: 'markdown-to-vue-loader',
            options: {
              componentWrapper: '<demo-block></demo-block>',
              tableClass: 'table',
              tableWrapper: '<div class="table-responsive"></div>',
              configureMarkdownIt(md) {
                md.use(markdownItAnchor, {
                  permalink: markdownItAnchor.permalink.headerLink(),
                });
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './docs/index.html',
    }),
    new MiniCssExtractPlugin(),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ],
  externals: env.production ? {
    vue: 'Vue',
    qrcode: 'QRCode',
  } : {},
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm-bundler',
    },
    extensions: ['.js', '.json', '.ts', '.d.ts', '.vue'],
  },
});
