<template>
  <section
    class="
      xl:max-w-[1200px]
      lg:max-w-[960px]
      mx-auto
      lg:flex
      justify-between
      items-center
      py-36
      px-6
      lg:px-0 lg:space-x-8
      xl:space-x-0
    "
  >
    <div
      class="flex-1 hidden lg:block"
      v-observe-visibility="visibilityChanged"
    >
      <img
        src="@/assets/images/bsr-lg.jpg"
        alt="2021 Nigerian Banking Sector Report"
        class="w-[474px] h-auto drop-shadow drop-shadow-xl shadow shadow-2xl"
        :class="{ scale: scale }"
      />
    </div>
    <div class="text-left flex-1" id="highlights">
      <h1
        class="
          text-primary
          uppercase
          font-inter font-bold
          text-2xl
          lg:text-4xl
          xl:text-5xl
        "
      >
        Report <span class="text-secondary">Highlights</span>
      </h1>
      <ul class="py-8 space-y-5">
        <CheckList>Global Macroeconomic Review & Outlook</CheckList>
        <CheckList>Trends in the Global Banking Industry</CheckList>
        <CheckList>Domestic Macroeconomic Review</CheckList>
        <CheckList>Socio-economic Development… Brace for Impact!</CheckList>
        <CheckList>Monetary Policy Review</CheckList>
        <CheckList>Monetary Policy Prognosis for H2:2022 & FY 2023</CheckList>
        <CheckList>Banking Sector Performance in 2021 and H1:2022</CheckList>
        <CheckList>Deep Dive into Merchant & Non-Interest Banking in Nigeria</CheckList>
        <CheckList>Key Risk Areas for Banks in 2022/23</CheckList>
        <CheckList>Crystal Ball: Key Outlook for 2022/23</CheckList>
        <CheckList>Banking Industry in the next Dispensation… Brace for Impact!</CheckList>
      </ul>

      <div class="mt-4">
        <ActionButton
          class="action-button w-full lg:w-auto justify-center px-6"
          v-scroll-to="'#summary'"
        >
          <template v-slot:icon><SummaryIcon /></template>
          <template v-slot:text
            ><span
              class="
                text-left text-grey-900
                leading-normal
                font-inter
                text-sm
                lg:text-base
                tracking-[3px]
                font-semibold
              "
              >READ SUMMARY</span
            ></template
          >
        </ActionButton>
      </div>
    </div>
  </section>
</template>

<script>
import CheckList from '~/components/CheckList'
import SummaryIcon from 'assets/svg/SummaryIcon'
import ListCheckIcon from 'assets/svg/listCheckIcon'

export default {
  name: 'Highlights',
  components: { ListCheckIcon, SummaryIcon, CheckList },
  data() {
    return {
      scale: false,
    }
  },
  methods: {
    visibilityChanged(isVisible, entry) {
      if (isVisible) {
        this.scale = true
        //console.log('Entry', entry)
      }
    },
  },
}
</script>
