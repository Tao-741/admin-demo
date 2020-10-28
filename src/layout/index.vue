<template>
  <div class="wrapper" :class="{closeBar :opened}">
    <!-- 头部-->
    <m-header/>
    <div class="wrapper_con">
      <side-bar/>
    </div>
    <page-link/>
  </div>
</template>

<script>
import MHeader from './components/header'
import SideBar from './components/sideBar'
import PageLink from '@/layout/components/sideBar/Link'
import { mapGetters } from 'vuex'
export default {
  name: 'index',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['opened'])
  },
  components: {
    PageLink,
    MHeader,
    SideBar
  }
}
</script>

<style lang="scss" scoped>
</style>
