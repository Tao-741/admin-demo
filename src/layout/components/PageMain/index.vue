<template>
  <div class="pageMain">
    <transition>
      <keep-alive>
        <router-view v-if="!$route.meta.noCache"/>
      </keep-alive>
      <router-view v-if="$route.meta.noCache"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>
