<!--TEMPLATE HTML GENERALE-->
<template>
  <AppHeader />

  <AppMain />

  <AppFooter />
</template>

<script>

// IMPORT
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import { store } from './store';

// SCRIPT EXPORT DEFAULT
export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  data() {
    return {
      store,
    }
  },

  methods: {
    getStruct() {

    },

  },
  created() {

  }
}
</script>

<style lang="scss" scoped>

</style>
