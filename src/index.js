/**
 * vue国际化同步配置插件
 */
const vueI18nSync = require('vue-i18n-sync')

class VueI18nSyncWebpackPlugin {
  constructor (options) {
    this.options = {
      // 同步配置根目录
      i18nRoot: '',
      // 保持并行同步的目录。默认根据root自动生成
      i18nDirs: [],
      // 创建配置文件的后缀名 默认.js
      extension: options.extension || '.js',
      // 自动import模块 默认true
      autoImportModule: true,
      // 设置key文件位置的分割符，为空表示不分离
      i18nSetKeyToFileSeperator: '.',
    }
    Object.assign(this.options, options);
  }
  apply (compiler){
    vueI18nSync(this.options);
  }
}

module.exports =  VueI18nSyncWebpackPlugin;
