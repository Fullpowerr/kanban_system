<template>
  <div class="mt-10 p-3 h-auto bg-white" v-for="product in completed_products">
    <card_product :product="product" />
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "list_completed_products",
  computed: {
    ...mapState({
      completed_products: (state) => state.completed_products,
    }),
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({}),
  },
  mounted() {},
};
</script>
