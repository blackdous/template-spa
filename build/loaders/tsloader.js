/*
 * @Descripttion: tsloader config
 * @Author: blackdous
 * @Date: 2020-07-22 16:51:56
 * @LastEditors: blackdous
 * @LastEditTime: 2020-07-22 16:54:08
 */

module.exports = {
  test: /\.ts$/,
  loader: 'ts-loader',
  exclude: /node_modules/,
  options: { appendTsSuffixTo: [/\.vue$/] }
};
