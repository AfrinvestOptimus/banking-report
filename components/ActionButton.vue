<template>
  <button>
    <slot name="icon"></slot>
    <slot name="text"></slot>
  </button>
</template>
<script>
import HardIcon from 'assets/svg/HardIcon'

export default {
  name: 'ActionButton',
  components: { HardIcon },
  props: ['Icon'],
}
</script>
