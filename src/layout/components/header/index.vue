<template>
  <!-- 头部-->
  <div class="header">
    <!-- 头部左侧-->
    <div class="header_l">
      <a href="javascript:;" class="logoLink">
        <img src="./logo.png" alt="logo"/>Vue Project
      </a>
    </div>
    <!-- 头部右侧-->
    <div class="header_r">
      <div class="headr_d1">
        <side-collapse class="sidecoll"/>
      </div>
      <div class="headr_d2"></div>
    </div>
  </div>
</template>

<script>
import SideCollapse from '@/components/SideCollapse'
export default {
  name: 'index',
  components: {
    SideCollapse
  }
}
</script>

<style scoped>

</style>
