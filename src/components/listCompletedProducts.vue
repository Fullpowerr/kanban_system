<template>
  <div class="mt-10 p-3 h-auto bg-white" v-for="product in completedProducts">
    <cardProduct :product="product" />
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "listCompletedProducts",
  computed: {
    ...mapState({
      completedProducts: (state) => state.completedProducts,
    }),
  },
};
</script>
