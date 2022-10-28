<template>
  <div
    class="
      bg-dark
      py-2.5
      text-white
      flex
      justify-between
      items-center
      px-4
      lg:px-10
      font-inter
    "
  >
    <NewLogo width="109" height="44"/>
<!--    <Logo  color="#fff" />-->
    <div>
      <ShareNetwork
        network="linkedIn"
        title="Afrinvest 2022 Banking Sector Report"
        url="https://bsr.afrinvest.com"
        class="
          text-sm
          font-medium
          cursor-pointer
          py-2.5
          flex
          space-x-2
          items-center
        "
      >
        <ShareIcon /> <span class="hidden lg:block">SHARE THIS PAGE</span
        ><span class="lg:hidden">SHARE</span>
      </ShareNetwork>
    </div>
  </div>
</template>

<script>
import Logo from 'assets/svg/Logo'
import ShareIcon from 'assets/svg/ShareIcon'
import NewLogo from "assets/svg/NewLogo";
export default {
  name: 'HeaderBar',
  components: {NewLogo, ShareIcon, Logo },
}
</script>

<style scoped></style>
