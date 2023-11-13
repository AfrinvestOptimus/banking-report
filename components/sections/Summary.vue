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
            More than six decades after gaining independence, Nigeria faces ongoing challenges in establishing a viable economic model to fully harness its potential. The initial crude oil boom of the 1970s and ‘80s which gave Nigeria a head start compared to non-oil-producing peers, lacked the necessary institutional mechanisms, governance checks and balances, and policy framework to drive sustained and inclusive growth. Quite the opposite happened as Nigeria’s per capita GDP has since dropped far below levels attained in 1981. Countries such as Benin, India, and Kenya with similar per capita GDP sizes in 1960 have steadily grown same by 298.0%, 780.0%, and 414.0%, respectively according to World Bank data. Not surprisingly, broader measures of well-being such as the Human Development Index (HDI), Corruption Perception Index (CPI), and Good Governance Index (GGI) followed suit, falling behind most peers.
          </p>
          <p class="summary-text">
            As the new administration embarks on bold reforms to reset the economy, it is critical to ensure that policies target underlying causes rather than symptoms. It is instructive to highlight that the ongoing reforms are not the first for Nigeria given the history of the Structural Adjustment Program (SAP) of the 1980s and 1990s, National Economic Empowerment and Development Strategy (NEEDS) of 2004, Vision 20:2020 of 2009, Economic Recovery and Growth Plan (ERGP) of 2017, amongst others – all of which have largely been unsuccessful in driving lasting change. Therefore, failure to unmask the root challenges plaguing the country would be akin to “pouring new wine into old wineskin”. The consequence would be policy fatigue and the perpetuation of a vicious cycle of ambitious development plans and underwhelming outcomes. On this basis, we lean on the New Institutional Economics (NIE) school of thought to gauge what real structural reform should look like for the Nigerian economy.
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
