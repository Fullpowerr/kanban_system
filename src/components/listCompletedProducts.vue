<template>
  <div class="mt-10 p-3 h-auto bg-white" v-for="product in completed_products">
    <cardProduct :product="product" />
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "listCompletedProducts",
  computed: {
    ...mapState({
      completed_products: (state) => state.completed_products,
    }),
  },
};
</script>
