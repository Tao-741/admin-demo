<template>
<div>
  <el-dropdown class="userDd">
    <div class="userDrop">
        <span class="userDrop_text">
        {{username}}<i class="el-icon-caret-bottom"></i>
      </span>
      <img src="./user01.jpg" alt="user">
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>
        <router-link to="/"><i class="el-icon-s-home">首页</i></router-link>
      </el-dropdown-item>
      <el-dropdown-item><i class="el-icon-s-custom">我的主页</i></el-dropdown-item>
      <el-dropdown-item>
        <a @click="loginOut"><i class="el-icon-switch-button">退出</i></a>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'index',
  computed: {
    ...mapGetters(['username'])
  },
  methods: {
    loginOut () {
      this.$store.dispatch('user/_loginOut')
    }
  }
}
</script>

<style scoped>

</style>
