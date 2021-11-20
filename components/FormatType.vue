<template>
  <li
    class="
      flex
      justify-between
      items-center
      md:items-end
      space-x-10
      py-5
      cursor-pointer
      select-none
    "
    @click="selectItem"
  >
    <div class="md:w-[400px]">
      <p
        class="
          font-semibold font-inter
          text-grey-900
          tracking-[3px]
          leading-[150%]
          text-sm
        "
      >
        <slot name="title"></slot>
      </p>
      <p
        class="
          text-grey-600
          font-inter font-medium
          leading-[150%]
          text-xs
          w-[80%]
        "
      >
        <slot name="subtitle"></slot>
      </p>
    </div>
    <div class="flex space-x-3 items-center">
      <p class="font-inter text-grey-600 text-sm font-medium">
        <slot name="price"></slot>
      </p>
      <OptionChecked v-if="item.selected" />
      <OptionUncheck v-else />
    </div>
  </li>
</template>
<script>
import OptionUncheck from 'assets/svg/optionUncheck'
import OptionChecked from 'assets/svg/optionChecked'

export default {
  name: 'formatType',
  components: { OptionChecked, OptionUncheck },
  props: ['item'],
  data() {
    return {}
  },
  methods: {
    selectItem() {
      this.$emit('selectItem', this.item)
    },
  },
}
</script>

<style scoped></style>
