import Vue from 'vue'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import { required, email, integer, numeric } from 'vee-validate/dist/rules'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

extend('required', {
  ...required,
  message: 'This field is required',
})

extend('email', {
  ...email,
  message: 'This field needs to be email',
})

extend('numeric', {
  ...numeric,
  message: 'This field needs to be a phone number',
})
