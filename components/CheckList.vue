<template>
  <li class="flex space-x-2">
    <div><ListCheckIcon /></div>
    <span class="text-black"><slot></slot></span>
  </li>
</template>
<script>
import ListCheckIcon from 'assets/svg/listCheckIcon'

export default {
  name: 'CheckList',
  components: { ListCheckIcon },
}
</script>
