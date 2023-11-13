<template>
  <div class="bg-[#DFF6FA]" id="paymentPane">
    <section
      class="
        lg:max-w-[920px]
        xl:max-w-[1148px]
        mx-auto
        lg:flex
        justify-between
        items-center
        xl:space-x-10
        px-6
        py-11
        lg:py-0 lg:px-0
      "
    >
      <div class="lg:hidden mb-9">
        <h2
          class="
            font-inter
            text-grey-900 text-5xl
            font-bold
            leading-[111.5%]
            uppercase
          "
        >
          GET YOUR<br class="lg:hidden" />BANKING<br
            class="lg:hidden"
          />SECTOR<br class="lg:hidden" />REPORT<br class="lg:hidden" /><span
            class="
              font-oswald
              bg-gradient-to-l
              from-[#FF5F00]
              to-[#5BDAA5]
              bg-clip-text
              text-transparent
            "
            >2023</span
          >
        </h2>
      </div>
      <div class="-my-16 flex-1 hidden lg:block">
        <BookImg width="537" height="791" class="lg:scale-75 xl:scale-100" />
      </div>
      <div class="flex-1">
        <div
          @click="modalShow"
          class="
            bg-grey-600 lg:bg-transparent
            border border-grey-500
            mb-8
            rounded-[3px]
            py-3 lg:py-6
            px-5
            flex
            items-center
            justify-between
            cursor-pointer
          "
        >
          <span
            class="font-inter font-medium text-grey-50 lg:text-grey-600 text-lg"
            v-if="!format"
            >Select preferred format</span
          >
          <span class="font-inter font-medium text-grey-50 lg:text-grey-600 text-lg" v-else
            >{{ format.title }} - {{ format.price }}</span
          >
          <Cheveron />
        </div>
        <div id="form">
          <FormDetails :state="format" @success="successPay($event)" />
          <div class="flex justify-start space-x-1 items-center">
            <InfoIcon />
            <span class="text-grey-500 text-sm"
              >Delivery within Nigeria (2-3 business days)</span
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BookImg from 'assets/svg/BookImg'
import InfoIcon from 'assets/svg/InfoIcon'
import FormDetails from '~/components/FormDetails'
import Cheveron from 'assets/svg/cheveron'

export default {
  name: 'Purchase',
  components: { Cheveron, FormDetails, InfoIcon, BookImg },
  props: ['format'],
  data() {
    return {}
  },
  methods: {
    modalShow() {
      this.$emit('showModal')
    },
    successPay(bought) {
      this.$emit('successPay', bought)
    },
  },
}
</script>
