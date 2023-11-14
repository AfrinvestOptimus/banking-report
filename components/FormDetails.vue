<template>
  <ValidationObserver ref="form">
    <form @submit.prevent="makePayment" class="space-y-8 mb-4">
      <div class="lg:flex justify-between lg:space-x-4 space-y-8 lg:space-y-0">
        <ValidationProvider
          v-slot="{ errors }"
          name="firstName"
          rules="required"
          class="form-control block mb-8 lg:mb-0"
        >
          <input
            type="text"
            class="text-input"
            :class="{ isError: errors.length }"
            placeholder="First name"
            v-model="firstName"
            required
          />
          <span class="error">
            {{ errors[0] }}
          </span>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          name="lastName"
          rules="required"
          class="form-control"
        >
          <input
            type="text"
            class="text-input"
            :class="{ isError: errors.length }"
            placeholder="Last name"
            v-model="lastName"
            required
          />
          <span class="error">
            {{ errors[0] }}
          </span>
        </ValidationProvider>
      </div>
      <div class="flex">
        <ValidationProvider
          v-slot="{ errors }"
          name="email"
          rules="required|email"
          class="form-control"
        >
          <input
            type="email"
            class="text-input"
            placeholder="Email"
            v-model="email"
            required
            :class="{ isError: errors.length }"
          />
          <span class="error">
            {{ errors[0] }}
          </span>
        </ValidationProvider>
      </div>
      <div class="flex">
        <ValidationProvider
          v-slot="{ errors }"
          :rules="{
            required: true,
            regex:
              /^(\+)?[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]?[0-9]?[0-9]?$/,
          }"
          class="form-control"
        >
          <input
            type="tel"
            class="text-input"
            :class="{ isError: errors.length }"
            placeholder="Phone number"
            v-model.trim="phone"
          />
          <transition name="scale">
            <span class="error">
              {{ errors[0] }}
            </span>
          </transition>
        </ValidationProvider>
      </div>
      <div class="flex">
        <ValidationProvider
          rules="required"
          v-slot="{ errors }"
          class="form-control"
        >
          <input
            type="text"
            class="text-input"
            placeholder="Address"
            :class="{ isError: errors.length }"
            v-model.trim="address"
          />
          <transition name="scale">
            <span class="error">
              {{ errors[0] }}
            </span>
          </transition>
        </ValidationProvider>
      </div>
      <button
        :disabled="!state"
        type="submit"
        class="submit-btn"
        :class="{ 'w-full': state }"
      >
        {{ state ? `BUY ${state.title} - ${state.price}` : 'BUY NOW' }}
      </button>
    </form>
  </ValidationObserver>
</template>
<script>
export default {
  name: 'FormDetails',
  props: ['state'],
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      address: '',
      phone: '',
    }
  },
  computed: {
    price: function () {
      const price = this.state?.price.split('N').pop()
      if (price) {
        return parseFloat(price.replace(/,/g, ''))
      }
    },
    // addressNeeded: function () {
    //   if (this.state?.id === 1 || this.state?.id === 3) {
    //     return true
    //   }
    // },
  },
  methods: {
    makePayment() {
      this.$refs.form.validate().then((success) => {
        if (success && this.price) {
          let formatSlug = ''
          if (this.state?.title === 'HARD COPY ONLY') {
            formatSlug = 'HCopy'
          }
          if (this.state?.title === 'eCOPY ONLY') {
            formatSlug = 'eCOPY'
          }
          if (this.state?.title === 'HARD COPY + eCOPY') {
            formatSlug = 'HCOPYeCOPY'
          }
          if (this.state?.title === 'eCOPY INCLUDING TABLES') {
            formatSlug = 'eCOPYTable'
          }

          this.$paystack({
            key: 'pk_live_9e7d687fae0250d564f50b04dec1f5ac060f8b6f', // Replace with your public key.
            email: this.email,
            amount: Number(this.price) * 100,
            currency: 'NGN',
            label: this.firstName,
            metadata: {
              first_name: this.firstName,
              last_name: this.lastName,
              email_address: this.email,
              phone: this.phone,
              address: this.address,
              type: 'bsr',
              format: this.state?.title,
              formatSlug: formatSlug,
            },
            channels: [
              'card',
              'bank',
              'ussd',
              'qr',
              'mobile_money',
              'bank_transfer',
            ],
            callback: () => {
              //alert('Payment went through')
              this.firstName = ''
              this.lastName = ''
              this.email = ''
              this.phone = ''
              this.address = ''
              this.$emit('success', this.state)
            },
            onClose: () => {
              // Do something.
              this.$confirm(
                "You didn't complete the transaction. Want to try again?",
                'Oops',
                'question'
              )
                .then(() => {
                  this.makePayment()
                })
                .catch(() => {
                  this.firstName = ''
                  this.lastName = ''
                  this.email = ''
                  this.phone = ''
                  this.address = ''
                })
            },
          })
        }
      })
    },
  },
}
</script>
<style scoped>
.form-control {
  @apply lg:flex-1 w-full lg:w-auto;
}
.text-input {
  @apply appearance-none border border-grey-500 rounded-[2px] w-full bg-transparent placeholder-grey-500 text-grey-900 text-sm px-5 py-2.5 leading-normal outline-none border-2 transition duration-500 ease-in-out;
}
.isError {
  @apply border-2 border-red-500 transition duration-500 ease-in-out;
}
</style>
