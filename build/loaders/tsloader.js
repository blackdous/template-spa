/*
 * @Descripttion: tsloader config
 * @Author: blackdous
 * @Date: 2020-07-22 16:51:56
 * @LastEditors: heidous
 * @LastEditTime: 2020-07-23 23:38:03
 */

module.exports = {
  test: /\.ts$/,
  use: [
    {
      loader: 'thread-loader'
    },
    {
      loader: 'cache-loader'
    },
    {
      loader: 'babel-loader'
    },
    {
      loader: 'ts-loader'
    }
  ],
  exclude: /node_modules/,
  options: { appendTsSuffixTo: [/\.vue$/] }
};
