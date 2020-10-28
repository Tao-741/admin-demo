<template>
<div class="breadDiv" id="domBread">
  <el-breadcrumb separator="/">
    <el-breadcrumb-item
      v-for="(item,index) in breadList"
      :to="item.path"
      :key="index">{{item.meta.title}}</el-breadcrumb-item>
  </el-breadcrumb>
</div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      breadList: []
    }
  },
  watch: {
    $route: {
      handler (to) {
        const tempBreadList = to.matched.filter(item => {
          if (item.meta && item.meta.title) {
            if (item.redirect) {
              item.path = ''
            }
            return true
          }
        })
        if (tempBreadList[0].path !== '/' && tempBreadList[0].path !== '/dashboard') {
          tempBreadList.unshift({ path: '/', meta: { title: '首页' } })
        }
        this.breadList = tempBreadList
      }
    }
  }
}
</script>

<style scoped>

</style>
