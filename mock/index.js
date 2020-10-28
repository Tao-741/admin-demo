const fs = require('fs')
const path = require('path')
const Mock = require('mockjs')
const JSON5 = require('json5')

// 读取json文件
function getJsonFile (filePath) {
  const json = fs.readFileSync(path.resolve(__dirname, filePath), 'utf-8')
  return JSON5.parse(json)
}

// 返回一个函数
module.exports = function (app) {
  if (process.env.MOCK === 'true') {
    // 监听http请求
    app.get('/getInfo', (rep, res) => {
      // 每次响应请求时读取mock data的json文件
      const json = getJsonFile('./userInfo.json5')
      // 将json传入 Mock.mock方法中，生成的数据返回给浏览器
      res.json(Mock.mock(json))
    })
  }
}
