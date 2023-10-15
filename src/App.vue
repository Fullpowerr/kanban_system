<template>
  <v_header />
  <!-- <two_lists></two_lists> -->
  <list_products></list_products>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "app",

  computed: {
    ...mapState([]),
  },
};
</script>

<style></style>
