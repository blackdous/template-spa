/*
 * @Descripttion: commitlint 配置文件
 * @Author: all
 * @Date: 2020-07-17 17:00:40
 * @LastEditors: all
 * @LastEditTime: 2020-07-17 17:04:24
 */

module.exports = {
  // 继承默认配置
  extends: ['@commitlint/config-angular'],
  // 自定义规则
  rules: {
    'type-enum': [
      2,
      'always',
      ['upd', 'feat', 'fix', 'refactor', 'docs', 'chore', 'style', 'revert']
    ],
    'header-max-length': [0, 'always', 72]
  }
};
