import Mock from 'mockjs'

function param2Obj (url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}

const list = []
const count = 60
for (let i = 0; i < count; i++) {
  list.push(
    Mock.mock({
      id: '@increment',
      order: /^[a-z]{4}-[0-9]{4}$/,
      date: '@datetime',
      name: '@cname',
      address: '@county(true)',
      status: '@integer(0,3)'
    })
  )
}
export default {
  getTableData: config => {
    const { page, size, order, status, date } = param2Obj(config.url)
    const filterOrderList = list.filter((item) => {
      return !(order && item.order.indexOf(order) === -1)
    })
    const filterStatusList = filterOrderList.filter((item) => {
      return !(status && item.status !== Number(status))
    })
    const filterDateList = filterStatusList.filter((item) => {
      const d1 = new Date(date)
      const d2 = new Date(item.date)
      return !(date && d2.getTime() !== d1.getTime())
    })
    const pageList = filterDateList.filter((item, index) =>
      index < size * page && index >= size * (page - 1)
    )
    return {
      code: 200,
      data: {
        records: pageList,
        total: filterDateList.length
      },
      msg: 'success'
    }
  }
}
