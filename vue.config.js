const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)// path.join(__dirname)设置绝对路径
}
module.exports = {
  publicPath: './',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('api', resolve('./src/api'))
      .set('components', resolve('./src/components'))
      .set('assets', resolve('./src/assets'))
      .set('common', resolve('./src/common'))
      .set('network', resolve('./src/network'))
      .set('views', resolve('./src/views'))
    // set第一个参数：设置的别名，第二个参数：设置的路径
  }
  // ,
  // devServer: {
  //   before: require('./mock/index.js')// 引入mock的index文件
  // }
}
