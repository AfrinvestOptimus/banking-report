<template>
  <div class="mt-20 lg:mt-40 flex justify-center mb-11 bg-white px-6">
    <div>
      <div class="flex justify-center mb-8">
        <NewLogoDark class="scale-75 lg:scale-90" width="195" height="59" />
        <!--        <LogoWhite class="scale-75 lg:scale-90" />-->
      </div>
      <p
        class="font-inter font-medium text-sm leading-5 text-grey-700 text-center mb-3.5"
      >
        For more information and further inquiries, kindly write to
        <span
          class="my-email"
          data-user="begwuchukwu"
          data-domain="afrinvest.com"
          >@</span
        >
        or
        <span class="my-email" data-user="atolani" data-domain="afrinvest.com"
          >@</span
        >
      </p>
      <p class="text-center text-grey-500 font-inter text-xs font-medium">
        &copy; {{ getYear() }} Afrinvest. RC 1622382. All Rights Reserved.
      </p>
    </div>
  </div>
</template>

<script>
import LogoWhite from 'assets/svg/LogoWhite'
import NewLogoDark from 'assets/svg/NewLogoDark'
export default {
  name: 'Footer',
  components: { NewLogoDark, LogoWhite },
  methods: {
    getYear: () => new Date().getFullYear(),
  },
}
</script>

<style scoped>
.my-email::after {
  content: attr(data-domain);
}
.my-email::before {
  content: attr(data-user);
}
</style>
