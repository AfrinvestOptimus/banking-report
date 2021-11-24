<template>
  <div
    class="
      modal
      fixed
      bg-[rgba(0,0,0,.7)]
      text-white
      top-0
      bottom-0
      right-0
      left-0
      flex
      justify-center
      items-center
      px-4
      md:px-0
    "
  >
    <div class="modal-box bg-white py-8 md:py-20 px-6 md:px-10">
      <div class="-mt-6 md:-mt-16 md:-mr-4 -mr-4 flex justify-end">
        <button @click="() => this.$emit('selectItem')" class="">
          <span class="material-icons text-grey-500 text-xl">close</span>
        </button>
      </div>
      <h2
        class="
          uppercase
          text-primary
          font-inter
          text-xl
          md:text-2xl
          font-bold
          mb-6
        "
      >
        Select preferred format
      </h2>
      <ul class="divide-y divide-solid divide-[rgba(0,0,0,.1)]">
        <FormatType
          v-for="type in types"
          :key="type.id"
          :item="type"
          @selectItem="selectFormat($event)"
        >
          <template v-slot:title>{{ type.title }}</template>
          <template v-slot:subtitle>{{ type.subTitle }}</template>
          <template v-slot:price>{{ type.price }}</template>
        </FormatType>
      </ul>
    </div>
  </div>
</template>

<script>
import FormatType from '~/components/FormatType'

export default {
  name: 'OptionModal',
  components: { FormatType },
  props: ['format', 'types'],
  computed: {},
  methods: {
    selectFormat(itemSelected) {
      this.types.forEach((type) => {
        if (type === itemSelected) {
          type.selected = true
        } else {
          type.selected = false
        }
      })
      this.$emit('selectItem', itemSelected)
    },
  },
}
</script>
