<template>
  <transition name="fade" appear>
    <div
      class="
        modal
        fixed
        bg-[rgba(0,0,0,.7)]
        top-0
        bottom-0
        right-0
        left-0
        flex
        justify-center
        items-center
        px-4
        md:px-0
        z-20
      "
    >
      <div class="modal-box bg-white py-8 md:py-12 px-6 md:px-10 max-w-[700px]">
        <div class="-mt-6 md:-mt-6 md:-mr-4 -mr-4 flex justify-end">
          <button @click="() => this.$emit('onRef', false)" class="">
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
            mb-2
          "
        >
          ENTER YOUR REFERENCE CODE
        </h2>
        <p class="font-inter text-grey-600 font-medium mb-8">
          Please enter the reference code we sent to your email and we’ll
          resend<br class="hidden lg:block" />
          you a one-time link to download your business summary report.
        </p>
        <ValidationObserver ref="form">
          <form @submit.prevent="sendRefCode" class="">
            <ValidationProvider
              rule="required"
              name="refCode"
              v-slot="{ errors }"
            >
              <input
                type="text"
                :class="{ isError: errors.length }"
                class="
                  border border-grey-500
                  w-full
                  py-2.5
                  px-5
                  outline-none
                  text-grey-600
                  rounded-[2px]
                "
                placeholder="Enter reference code"
                v-model="refCode"
              />
              <span class="error">
                {{ errors[0] }}
              </span>
            </ValidationProvider>
            <button :disabled="true" type="submit" class="submit-btn">
              SUBMIT
            </button>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ReferenceCode',
  props: [''],
  data() {
    return {
      refCode: '',
    }
  },
  methods: {
    sendRefCode() {
      this.$refs.form.validate().then((success) => {})
    },
  },
}
</script>

<style>
.isError {
  @apply border-2 border-red-500;
}
</style>
