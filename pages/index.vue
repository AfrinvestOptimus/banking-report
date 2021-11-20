<template>
  <div class="antialiased font-roboto">
    <HeaderBar />
    <Success v-if="success" />
    <div v-else>
      <Hero />
      <Highlights />
      <Summary />
      <Purchase
        @showModal="showModal"
        :format="format"
        @successPay="successPage"
      />
      <OptionModal
        v-if="modal"
        :types="formatTypes"
        @selectItem="hideModal($event)"
      />
    </div>
    <Footer />
  </div>
</template>

<script>
import HeaderBar from '~/components/sections/HeaderBar'
import Hero from '~/components/sections/Hero'
import Highlights from '~/components/sections/Highlight'
import Summary from '~/components/sections/Summary'
import Purchase from '~/components/sections/Purchase'
import Footer from '~/components/sections/Footer'
import OptionModal from '~/components/sections/OptionModal'
import Success from '~/components/sections/Success'

const formatTypes = [
  {
    id: 1,
    title: 'HARD COPY ONLY',
    subTitle: 'High color and graphics printed format of the report',
    price: 'N40,000',
    selected: false,
  },
  {
    id: 2,
    title: 'eCOPY ONLY',
    subTitle: 'Electronic copy of the report in PDF (Not editable)',
    price: 'N160,000',
    selected: false,
  },
  {
    id: 3,
    title: 'HARD COPY + eCOPY',
    subTitle:
      'High color and graphic printed format of the report with an electronic copy in PDF (Not editable)',
    price: 'N170,000',
    selected: false,
  },
  {
    id: 4,
    title: 'eCOPY INCLUDING TABLES',
    subTitle:
      'Electronic copy of the report with access to all tables and charts in an editable format.',
    price: 'N450,000',
    selected: false,
  },
]

export default {
  name: 'HomePage',
  components: {
    Success,
    OptionModal,
    Footer,
    Purchase,
    Summary,
    Highlights,
    Hero,
    HeaderBar,
  },
  data() {
    return {
      format: null,
      formatTypes,
      modal: false,
      success: false,
    }
  },
  methods: {
    showModal() {
      this.modal = true
    },
    hideModal(selectedItem) {
      this.modal = false
      this.format = selectedItem
    },
    successPage() {
      this.success = true
    },
  },
}
</script>
