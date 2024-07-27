<template>
  <div
    class="bg-gradient-to-b from-[#DFF6FA] lg:via-[#DFF6FA] to-[rgba(245, 251, 252, 0)] pb-20"
  >
    <section
      class="xl:max-w-[1200px] lg:max-w-[960px] mx-auto px-6 py-36 flex justify-center"
    >
      <div>
        <h4
          class="text-center text-grey-900 font-semibold text-lg tracking-[3px] font-inter uppercase"
        >
          REPORT SUMMARY
        </h4>
        <h1
          class="uppercase text-primary text-2xl lg:text-5xl font-bold leading-[111.5%] text-center pt-4 pb-8 lg:pb-16"
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
            The Nigerian banking sector has witnessed several recapitalisation
            episodes in a bid to shore up minimum capital required to compete
            locally and globally. The 2004/2005 banking recapitalisation
            exercise was a remarkable episode which cleansed the sector and was
            awash with consolidation and takeovers that reduced operational
            banks from 89 to 25. While the cleansing addressed the corporate
            governance deficiencies and brought the necessary financial
            stability, technological innovations, international competitiveness
            and reputation, it had its flaws. The exercise pumped in excess
            capital, most of which created unhealthy loans and persistently
            increasing non-performing loans and birthed more risk management
            issues. These laybacks resulted in the repeal of universal banking
            model, establishment of AMCON, and the revised capital requirement
            in 2010.
          </p>
          <p class="summary-text">
            Recently, in its March 2024 capital requirement guideline, the CBN
            announced a new capital structure for banks under different licenses
            with the aim of strengthening the financial system and aiding the
            government’s $1.0tn economy by 2032. Away from the agenda, this
            became pertinent following the clear erosion of banks’ capital
            buffer post- 2010 from a real and FX perspective compared to 2010
            levels. Using 2023 average, the existing minimum capital size has
            lost 77.1% and 76.5% in FX and real terms, respectively. To shore up
            the capital gap, the CBN considered the impact of macro-economic
            headwinds on banks’ risk profile and financial position in defining
            the new threshold. While these criteria appear robust, the new
            capital threshold may not stand the test of time should there be
            unprecedented macroeconomic shocks. To bring this to perspective, a
            revision of the new capital to projected FX-base (average of
            ₦1,200/$) signals a 16.7% erosion in capital level. This begs the
            question of its adequacy considering the need for banks to remain
            internationally competitive and own a robust balance sheet to
            efficiently play the intermediation role in the $1.0tn game plan.
          </p>
          <div
            class="flex space-x-3 cursor-pointer hover:transform hover:translate-x-2 transition duration-500 ease-in-out"
            v-scroll-to="'#paymentPane'"
          >
            <HardIcon
              height="20px"
              width="15.38px"
              alt-color="#FF5F00"
              color="#FFF"
            />
            <span
              class="font-inter text-sm leading-normal tracking-[3px] font-semibold text-primary border-b border-black"
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
