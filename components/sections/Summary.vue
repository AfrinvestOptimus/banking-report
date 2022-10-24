<template>
  <div
    class="
      bg-gradient-to-b
      from-[#DFF6FA]
      lg:via-[#DFF6FA]
      to-[rgba(245,
      251,
      252,
      0)]
      pb-20
    "
  >
    <section
      class="
        xl:max-w-[1200px]
        lg:max-w-[960px]
        mx-auto
        px-6
        py-36
        flex
        justify-center
      "
    >
      <div>
        <h4
          class="
            text-center text-grey-900
            font-semibold
            text-lg
            tracking-[3px]
            font-inter
            uppercase
          "
        >
          REPORT SUMMARY
        </h4>
        <h1
          class="
            uppercase
            text-primary text-2xl
            lg:text-5xl
            font-bold
            leading-[111.5%]
            text-center
            pt-4
            pb-8
            lg:pb-16
          "
          id="summary"
        >
          <span class="text-secondary">SUMMARY</span>: BANKING
          <br class="lg:hidden" />
          SECTOR
          <br class="hidden lg:block" />
          PERFORMANCE IN <br class="lg:hidden" />
          2022 AND H1:2023
        </h1>
        <div class="lg:w-3/5 mx-auto space-y-8 mb-8">
          <p class="summary-text">
            Since the publication of our 2021 Nigerian Banking Sector report – “Resilience Amidst Endemic and Pandemic Constraints”, the bullish projections for the global economy in 2022 have been undermined by deteriorating fundamentals. The increasingly gloomy projections have been the upshot of mounting downside risks, further inhibiting a world economy yet to fully shrug off the impact of the pandemic. Against this backdrop, the IMF noted that the World's real GDP contracted by 2.6% in Q2:2022. Furthermore, the Bretton woods institution downgraded its global growth projections for the third consecutive time in 2022. Meanwhile, on the domestic front, real GDP expanded further by 3.3% in H1:2022 (from 3.5% in FY:2021), the firmest H1 growth since 6.4% in 2014. The sustained expansion came on the back of a sturdy 5.4% expansion in the non-oil sector, while the oil sector continued to languish in contraction (since Q2:2020). Nonetheless, our FY:2022 growth projection remains modest at 3.3%, compared to FG’s projection of 4.2% due to persistent domestic and external headwinds.

          </p>
          <p class="summary-text">
            In the domestic banking space, the positive performance of the economy in 2021 rubbed off on the banking sector’s earnings and profitability. Aggregate gross earnings for the banks within Afrinvest's coverage grew 12.7% in 2021 to ₦5.6tn. Also, PBT and PAT increased by 25.6% and 22.0% compared to 0.3% and 4.2% in 2020 respectively. Yet, the persistent rise in consumer prices over the last decade to 2021-year end (up 191.7%) and the devaluation of the Naira by around 62.2% have eroded the gains that banks have made in real terms. Based on our analysis of changes in the aggregate gross earnings, PBT, and PAT of our coverage banks between 2012 and 2021, we found a nominal increase of ₦3.5tn, ₦883.9bn, and ₦720.3bn respectively. Upon adjusting 2021 numbers to reflect changes in core inflation over the 10-year period, the real difference in these key line items shows a decline of ₦250.9bn, ₦33.4bn, and ₦54.0bn accordingly, compared to 2012. We also found that banks have not been spared from the impact of domestic currency weakness.

          </p>
          <p class='summary-text'>
            Looking ahead, Nigeria is set for another cycle of leadership in 2023 as the tenure of President Muhammadu Buhari, 30 state governors, and over 1,000 legislatures draw to a close. At a time when there is daunting fiscal, monetary, and social challenges to surmount, Nigerians cannot afford to elect leaders who lack the competence, capacity, and creativity to find lasting solutions to the current national quagmire. Even with a leadership that is willing to introduce the needed reforms, our assessment of the economy’s health metrics suggests that the present challenging environment would worsen before it can get better. Hence, Nigerians would need to brace for impact regardless of the outcome of the polls. Noteworthy, the political will of the incoming administration to implement tough reforms that would curtail major economic leakages and ensure the proper channeling of scarce resources to critical sectors would be a refreshing start.

          </p>
          <div
            class="
              flex
              space-x-3
              cursor-pointer
              hover:transform hover:translate-x-2
              transition
              duration-500
              ease-in-out
            "
            v-scroll-to="'#paymentPane'"
          >
            <HardIcon height="20px" width="15.38px" color="#FF5F00" />
            <span
              class="
                font-inter
                text-sm
                leading-normal
                tracking-[3px]
                font-semibold
                text-primary
                border-b border-black
              "
              >GET THE FULL REPORT</span
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HardIcon from 'assets/svg/HardIcon'
export default {
  name: 'Summary',
  components: { HardIcon },
}
</script>

<style scoped>
.summary-text {
  @apply text-justify text-black leading-[160%];
}
</style>
