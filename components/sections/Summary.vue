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
          2020 AND H1:2021
        </h1>
        <div class="lg:w-3/5 mx-auto space-y-8 mb-8">
          <p class="summary-text">
            More than a year ago since Nigeria recorded her first confirmed case
            of COVID-19, the country has endured the economic hardship and
            disruption of livelihood that followed. While the world had little
            hope in the resilience of the dark continent, Nigeria managed to
            keep her head above the COVID-19 waters in the face of the first and
            second waves of the virus.
          </p>
          <p class="summary-text">
            Amidst the tough macro and tight regulatory environment, banks
            remained resilient. This is evident in banks delivering a 15.6% and
            6.8% y/y growth in total assets and profit respectively in H1:2021
            despite elevated CRR debits and compulsory LDR levels. With the
            pandemic, the Nigerian Banking sector vulnerability heightened which
            required swift policy responses from the CBN. Consequently, the CBN
            rolled out stimulus packages to critical sectors with significant
            loan exposure, reduced interest rate on intervention facilities
            (from 9.0% to 5.0%) and granted banks the forbearance to restructure
            loan exposure. As a result, real GDP growth in the financial
            institutions sector grew by 13.3% y/y.
          </p>
          <p>
            Broadly speaking, is safe to conclude that the Nigerian banking
            sector remained resilient in the face of COVID-19 and several
            regulatory headwinds. Nevertheless,banks' earnings and asset quality
            have taken a beating while being under pressure from competition.
            Also, the pandemic has provided learning points for players in the
            sector to reshape and reimagine their product/services offerings for
            long-term growth and sustainability.
          </p>
          <div
            class="flex space-x-3 cursor-pointer"
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
