<template>
  <ValidationObserver ref="form">
    <form @submit.prevent="makePayment" class="space-y-8 mb-4">
      <div
        class="lg:flex lg:justify-between lg:space-x-4 space-y-8 lg:space-y-0"
      >
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
          rules="required"
          class="form-control"
        >
          <input
            type="tel"
            class="text-input"
            :class="{ isError: errors.length }"
            placeholder="Phone number"
            v-model="phone"
          />
          <span class="error">
            {{ errors[0] }}
          </span>
        </ValidationProvider>
      </div>
      <div class="flex" v-if="addressNeeded">
        <ValidationProvider
          :rules="{ required: addressNeeded }"
          v-slot="{ errors }"
          class="form-control"
        >
          <input
            type="tel"
            class="text-input"
            placeholder="Address"
            :class="{ isError: errors.length }"
            v-model="address"
          />
          <span class="error">
            {{ errors[0] }}
          </span>
        </ValidationProvider>
      </div>
      <button
        :disabled="!state"
        type="submit"
        class="
          mt-6
          bg-[#64CE86]
          rounded-[3px]
          text-white
          py-4
          px-7
          font-inter font-semibold
          leading-normal
          uppercase
          tracking-[3px]
          disabled:opacity-50
        "
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
    addressNeeded: function () {
      if (this.state?.id === 1 || this.state?.id === 3) {
        return true
      }
    },
  },
  methods: {
    makePayment() {
      this.$refs.form.validate().then((success) => {
        if (success && this.price) {
          this.$paystack({
            key: 'pk_test_ac3bfe1c740c6c4be505fabb6aa098a8b26cec87', // Replace with your public key.
            email: this.email,
            amount: Number(this.price) * 100,
            currency: 'NGN',
            label: this.firstName,
            metadata: {
              'First Name': this.firstName,
              'Last Name': this.lastName,
              'Email Address': this.email,
              'Phone Number': this.phone,
              Address: this.address,
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
              this.$emit('success')
            },
            onClose: () => {
              // Do something.
              alert('Something went wrong')
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
  @apply appearance-none border border-grey-500 rounded-[2px] w-full bg-transparent placeholder-grey-500 text-grey-900 text-sm px-5 py-2.5 leading-normal outline-none border-2;
}
.isError {
  @apply border-2 border-red-500;
}
.error {
  @apply text-red-500 font-roboto text-xs tracking-[2px];
}
</style>
