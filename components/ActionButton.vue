<template>
  <a :href="href" v-if="href" target="_blank">
    <slot name="icon" />
    <slot name="text" />
  </a>
  <button v-else>
    <slot name="icon" />
    <slot name="text" />
  </button>
</template>
<script>
import HardIcon from 'assets/svg/HardIcon'

export default {
  name: 'ActionButton',
  components: { HardIcon },
  props: ['Icon', 'href'],
}
</script>
