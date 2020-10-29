import Mock from 'mockjs'
export default {
  getInfo () {
    return Mock.mock({
      code: 200,
      data: {
        name: 'admin',
        roles: ['Table'],
        introduce: '@cparagraph(2)'
      },
      msg: 'success'
    })
  },
  login () {
    return Mock.mock({
      code: 200,
      data: {
        token: '@string("lower",50)'
      },
      msg: 'success'
    })
  }
}
