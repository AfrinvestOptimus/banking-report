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
    <div class="flex-1 hidden lg:block">
      <img
        src="@/assets/images/BSR-2021-Report-lg.jpg"
        alt="2021 Nigerian Banking Sector Report"
        class="w-[474px] h-auto drop-shadow drop-shadow-xl shadow shadow-2xl"
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
      <ul class="py-8 space-y-5 hidden lg:block">
        <CheckList>Global Macroeconomic Review & Outlook</CheckList>
        <CheckList>Trends in the Global Banking Industry</CheckList>
        <CheckList>Domestic Macroeconomic Review</CheckList>
        <CheckList>Fiscal Policy: 2021/22 Budget Review & Analysis</CheckList>
        <CheckList>Prominent Legislation & Socio-economic Update</CheckList>
        <CheckList>Monetary Policy Review & Outlook</CheckList>
        <CheckList>Financial Sector Regulation</CheckList>
        <CheckList>Banking Sector Performance In 2020 and H1:2021</CheckList>
        <CheckList>Crystal ball: Key outlook for FY:2021</CheckList>
      </ul>
      <ul class="py-8 space-y-5 lg:hidden">
        <CheckList
          >The climate for the banking sector in 2019 and the first half of 2020
          was characterized by an assertive stance by the CBN and a change in
          business</CheckList
        >
        <CheckList
          >The climate for the banking sector in 2019 and the first half of 2020
          was</CheckList
        >
        <CheckList
          >The climate for the banking sector in 2019 and the first half of 2020
          was characterized by an assertive stance by the CBN and a change in
          business</CheckList
        >
        <CheckList
          >The climate for the banking sector in 2019 and the first half of 2020
          was characterized by an assertive stance</CheckList
        >
        <CheckList
          >The climate for the banking sector in 2019 and the first half of 2020
          was characterized assertive stance by the CBN and</CheckList
        >
        <CheckList
          >The climate for 2020 was characterized by an assertive stance by the
          CBN and a change in business</CheckList
        >
        <CheckList>The climate for the banking sector in 2019</CheckList>
      </ul>
      <div class="mt-4">
        <ActionButton
          class="action-button w-full lg:w-auto justify-center"
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
}
</script>
