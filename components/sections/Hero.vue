<template>
  <section
    class="
      bg-gradient-to-b
      to-[#E9F8FB]
      from-[#F5FBFC]
      lg:h-[calc(100vh-70px)]
      relative
      overflow-x-hidden
      xl:overflow-hidden
    "
  >
    <img
      src="~/assets/images/bg-down.png"
      alt="downbg"
      class="
        absolute
        h-1/2
        object-cover object-left
        w-auto
        xl:h-auto xl:w-full
        bottom-0
        opacity-50
        xl:opacity-40
      "
    />
    <img
      src="@/assets/images/ellipse.png"
      class="absolute -right-10 xl:-top-10 2xl:top-0"
      alt="bg"
    />
    <img
      src="@/assets/images/decor1.png"
      alt="bg"
      class="absolute right-0 xl:right-36 xl:top-10 scale-50 xl:scale-90"
    />

    <div
      class="
        lg:max-w-[960px]
        xl:max-w-[1200px]
        mx-auto
        lg:flex lg:justify-between
        pt-11
        lg:pt-40
        pb-20
        items-center
        relative
        px-6
        xl:px-0
      "
    >
      <img
        src="../../assets/images/decor4.png"
        alt="bg"
        class="absolute -right-32"
      />
      <img
        src="@/assets/images/decor2.png"
        alt="bg"
        class="
          absolute
          scale-50
          xl:scale-90 xl:-right-32
          right-0
          -top-14
          xl:top-10
        "
      />

      <!--   Hero Book Image   -->
      <div
        class="
          relative
          flex
          justify-center
          xl:block
          mb-10
          xl:mb-0
          lg:flex-1
          xl:flex-none
        "
      >
        <img
          src="@/assets/images/decor3.png"
          alt="bg"
          class="
            absolute
            scale-50
            xl:scale-100
            -top-10
            left-10
            xl:left-[calc(50%-20px)] xl:-top-32
          "
        />
        <transition appear name="scale">
          <img
            src="@/assets/images/bsr-sm.jpg"
            class="
              w-auto
              h-[220px]
              lg:h-[50vh]
              relative
              drop-shadow drop-shadow-xl
              shadow shadow-2xl
            "
            alt="2021 Nigerian Banking Sector Report"
          />
        </transition>
      </div>

      <!--  Hero Content    -->
      <div class="relative lg:order-first lg:flex-1 xl:flex-none">
        <div class="pb-9">
          <h1
            class="
              text-primary
              font-inter font-bold
              text-4xl
              leading-[114%]
              lg:text-5xl
              xl:text-[56px]
              lg:leading-[55px]
              xl:leading-[64px]
              pb-2
              xl:pb-5
            "
          >
            <span class="hidden lg:block"
              >2023 NIGERIAN<br />BANKING SECTOR<br /><span
                class="text-secondary"
                >REPORT</span
              ></span
            >
            <span class="lg:hidden"
              >2023 NIGERIAN BANKING SECTOR
              <span class="text-secondary">REPORT</span></span
            >
          </h1>
          <p class="font-roboto text-base lg:text-lg leading-7 hidden lg:block">
            Discover the impact of global economic risks and challenges on the <br class="lg:hidden xl:block" />Nigerian banking sector, the geopolitical and economic trends that are<br class="lg:hidden xl:block" /> shaping the global financial landscape, and the ongoing challenges that <br class="lg:hidden xl:block" />Nigeria faces in establishing a viable economic model to fully harness its potential.
<!--            Discover how the Nigerian banking sector has fared in an economy <br class="lg:hidden xl:block" />
            yet to fully shrug off the aftermath of the pandemic, and how to brace <br
            class="lg:hidden xl:block"
          />
            for the impact of daunting fiscal, monetary, and social conditions.-->
          </p>
          <p class="font-roboto text-base xl:text-lg leading-7 lg:hidden">
            Discover the impact of global economic risks and challenges on the Nigerian banking sector, the geopolitical and economic trends that are shaping the global financial landscape, and the ongoing challenges that Nigeria faces in establishing a viable economic model to fully harness its potential.
          </p>
        </div>
        <div class="lg:flex lg:space-x-4  space-y-4 xl:space-y-0 py-2">
          <ActionButton href="/BSR2022_Summary.pdf" class="action-button justify-center px-5">
            <template v-slot:icon>
              <HardIcon alt-color="#111827" color="#FFF"  width="20" height="26" />
            </template>
            <template v-slot:text>
              <span
                class="
                  text-left text-grey-900
                  leading-normal
                  font-inter
                  text-sm
                  lg:text-base
                  tracking-[2.5px]
                  font-semibold
                "
              >DOWNLOAD EXECUTIVE SUMMARY</span
              >
            </template>
          </ActionButton>
          <ActionButton
            class="action-button-dark justify-center"
            v-scroll-to="'#paymentPane'"
          >
            <template v-slot:icon>
              <HardIcon alt-color="#FFF" color="#111827" width="20" height="26" />
            </template>
            <template v-slot:text>
              <span
                class="
                  text-left text-white
                  leading-normal
                  font-inter
                  text-sm
                  lg:text-base
                  tracking-[2.5px]
                  font-semibold
                "
                >BUY THE FULL REPORT</span
              >
            </template>
          </ActionButton>
        </div>
        <button
          class="
            flex
            justify-start
            space-x-1
            items-center
            mt-4
            cursor-pointer
            font-medium
          "
          @click="onRef"
        >
          <info-icon />
          <span class="text-grey-700 text-sm"
            >Already Purchased?
            <span class="text-secondary">Request eBook</span></span
          >
        </button>
      </div>
    </div>
    <div class="lg:flex justify-center items-center relative hidden">
      <a
        href="#"
        v-scroll-to="'#highlights'"
        class="cursor-pointer animate-bounce"
        ><DownArrow
      /></a>
    </div>
  </section>
</template>

<script>
import ActionButton from '~/components/ActionButton'
import HardIcon from 'assets/svg/HardIcon'
import SoftIcon from 'assets/svg/SoftIcon'
import InfoIcon from 'assets/svg/InfoIcon'
import DownArrow from 'assets/svg/DownArrow'
import DownBg from 'assets/svg/DownBg'

export default {
  name: 'Hero',
  components: { DownBg, DownArrow, InfoIcon, SoftIcon, HardIcon, ActionButton },
  methods: {
    onRef() {
      this.$emit('onRef', true)
    },
  },
}
</script>
