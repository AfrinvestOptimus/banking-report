<template>
  <div>
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
        src="@/assets/images/bg-down.png"
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

      <div
        class="
          lg:max-w-[960px]
          xl:max-w-[1200px]
          mx-auto
          lg:flex lg:justify-center lg:space-x-8
          pt-11
          lg:pt-40
          pb-20
          items-center
          relative
          px-6
          xl:px-0
        "
      >
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
            src="@/assets/images/BSR-2021-Report-sm.jpg"
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
        </div>

        <!--  Hero Content    -->
        <div class="relative lg:flex-1 xl:flex-none">
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
                lg:pb-5
              "
            >
              <span
                >YOUR REPORT IS ON<br class="hidden xl:block" />
                ITS WAY!</span
              >
            </h1>
            <p class="font-roboto text-base lg:text-lg leading-7 w-full">
              Thank you for your interest in owning the Afrivest 2021 Banking
              Report.<br class="hidden lg:block" />
              <span
                v-if="
                  selected.id === 4 || selected.id === 2 || selected.id === 3
                "
                >You'll get a mail in your containing the downloaded file in
                your email in a few minutes. <br class="hidden lg:block"
              /></span>
              <span v-if="selected.id === 3 || selected.id === 1"
                >Your hard copy will be sent to the address you’ve
                provided.</span
              >
            </p>
          </div>

          <div
            class="
              flex
              justify-start
              space-x-1
              items-end
              mt-4
              cursor-pointer
              font-medium
            "
          >
            <span class="material-icons text-grey-600">home</span>
            <a href="/banking-report/" class="text-secondary"> Go Back Home</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import DownloadIcon from 'assets/svg/DownloadIcon'
import InfoIcon from 'assets/svg/InfoIcon'
export default {
  name: 'success',
  props: ['selected'],
  components: { InfoIcon, DownloadIcon },
}
</script>

<style scoped></style>
