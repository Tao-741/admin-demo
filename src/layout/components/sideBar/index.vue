<template>
<div class="sideBar" id="domSideBar">
 <el-scrollbar>
   <el-menu default-active="2"
            class="el-menu-vertical-demo"
            background-color="#3a3f51"
            text-color="#b5b6bd"
            active-text-color="rgb(79, 148, 212)"
            mode="vertical"
            :collapse-transition="false"
            :collapse="opened">
     <side-bar-item
       v-for="item in routes"
       :key="item.path"
       :item="item"
       :base-path="item.path"/>
   </el-menu>
 </el-scrollbar>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import SideBarItem from '@/layout/components/sideBar/SideBarItem'
export default {
  name: 'index',
  components: { SideBarItem },
  computed: {
    ...mapGetters(['opened', 'routes'])
  },
  created () {
    console.log(this.routes)
  }
}
</script>

<style lang="scss" scoped>
</style>
