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
        <bread-crumb class="bread"/>
      </div>
      <div class="headr_d2">
        <ul class="headrUl clearFixed">
          <li id="domMessage"></li>
          <li id="domFullScreen"></li>
          <li id="domPersonal">
            <user-dropdown/>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb'
import SideCollapse from '@/components/SideCollapse'
import UserDropdown from '@/components/UserDropdown'
export default {
  name: 'index',
  components: {
    SideCollapse,
    BreadCrumb,
    UserDropdown
  }
}
</script>

<style scoped>

</style>
