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
          items-start
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
            src="@/assets/images/report.png"
            class="w-auto h-[220px] lg:h-[50vh] relative"
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
              Click the link below to download. Your hardcopy will be sent to
              the <br class="hidden xl:block" />
              address you’ve provided.
            </p>
          </div>

          <div class="space-y-4 xl:space-y-0 py-4">
            <ActionButton
              class="action-button justify-center lg:px-12 space-x-8"
            >
              <template v-slot:icon>
                <DownloadIcon />
              </template>
              <template v-slot:text>
                <span
                  class="
                    text-left text-grey-900
                    leading-normal
                    font-inter
                    text-sm
                    lg:text-base
                    tracking-[3px]
                    font-semibold
                  "
                  >DOWNLOAD</span
                >
              </template>
            </ActionButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import DownloadIcon from 'assets/svg/DownloadIcon'
export default {
  name: 'success',
  components: { DownloadIcon },
}
</script>

<style scoped></style>
