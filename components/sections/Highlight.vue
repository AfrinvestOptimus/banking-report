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
        <CheckList
          >Global Economic and Monetary Policy Review & Outlook</CheckList
        >
        <CheckList
          >Global Banking Sector Performance Review & Outlook</CheckList
        >
        <CheckList>Domestic Macroeconomic Review & Outlook</CheckList>
        <CheckList>Monetary Policy Review & Outlook</CheckList>
        <CheckList
          >Financial Sector Regulatory Environment Review & Outlook</CheckList
        >
        <CheckList
          >Recapitalisation… Catalyst for a One-trillion Dollar
          Economy?</CheckList
        >
        <CheckList
          >Let’s Go Down Memory Lane… The Need for 2004/2005 and 2010 Banking
          Recapitalisation</CheckList
        >
        <CheckList
          >How Banks Have Fared vs Capital Benchmark… The Birth of a Fresh
          Banking Recapitalisation Exercise</CheckList
        >
        <CheckList
          >Banking Recapitalisation as a Driver of the $1.0tn Economy Ambition…
          Lessons from Indonesia</CheckList
        >
        <CheckList
          >Banking in Post-Recapitalisation Period… A Potent Arsenal for Driving
          Infrastructural Development?</CheckList
        >
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
