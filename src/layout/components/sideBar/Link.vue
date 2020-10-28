<template>
  <div v-bind="returnTag(to)" v-if="to!==undefined">
    <slot />
  </div>
</template>

<script>
import { isAbsolutePath } from '@/utils/validate'

export default {
  props: {
    to: {
      type: String,
      require: true
    }
  },
  methods: {
    returnTag (path) {
      if (isAbsolutePath(path)) {
        return {
          is: 'a',
          target: '_blank',
          href: path
        }
      } else {
        return {
          is: 'router-link',
          to: path
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
