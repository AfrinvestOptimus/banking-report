<template>
  <section
    class="xl:max-w-[1200px] lg:max-w-[960px] mx-auto lg:flex justify-between items-center py-36 px-6 lg:px-0 lg:space-x-8 xl:space-x-0"
  >
    <div
      class="flex-1 hidden lg:block"
      v-observe-visibility="visibilityChanged"
    >
      <img
        src="@/assets/images/bsr23-lg.png"
        alt="2023 Nigerian Banking Sector Report"
        class="w-[474px] h-auto"
        :class="{ scale: scale }"
      />
    </div>
    <div class="text-left flex-1" id="highlights">
      <h1
        class="text-primary uppercase font-inter font-bold text-2xl lg:text-4xl xl:text-5xl"
      >
        Report <span class="text-secondary">Highlights</span>
      </h1>
      <ul class="py-8 space-y-5">
        <CheckList>Global Monetary Policy Review & Outlook</CheckList>
        <CheckList
          >Global Banking Sector Performance Review & Outlook</CheckList
        >
        <CheckList>Domestic Macroeconomic Review & Outlook</CheckList>
        <CheckList>Monetary Policy Review & Outlook</CheckList>
        <CheckList
          >Financial Sector Regulatory Environment Review & Outlook</CheckList
        >
        <CheckList>Getting Nigeria to Work Again… It Is Time</CheckList>
        <CheckList
          >A Path to Transformative Rebirth… Theoretical Framework</CheckList
        >
        <CheckList
          >Understanding Old Problems in New Light… The NIE
          Perspective</CheckList
        >
        <CheckList>Repairing The Foundation… Our View</CheckList>
      </ul>

      <div class="mt-4">
        <ActionButton
          class="action-button w-full lg:w-auto justify-center px-6"
          v-scroll-to="'#summary'"
        >
          <template v-slot:icon><SummaryIcon /></template>
          <template v-slot:text
            ><span
              class="text-left text-grey-900 leading-normal font-inter text-sm lg:text-base tracking-[3px] font-semibold"
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
