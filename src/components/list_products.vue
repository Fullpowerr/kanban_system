<template>
  <div class="w-full h-12 flex justify-center m-auto">
    <v_button
      @click="dialogCreateShow"
      class="bg-blue-500 text-white border-black"
      >Создать</v_button
    >
  </div>

  <div class="w-full flex justify-center text-center">
    <create_form v-if="dialogCreateProduct" />
    <div class="w-3/12 border bg-blue-100 rounded-lg">
      <div class="text-xl italic text-red-900 mt-6">Не отработанные</div>

      <select_sorted
        class="mt-2"
        :model-value="selectedFilter"
        @update:model-value="setSelectedFilter"
        :options="filteredRatings"
      />

      <div v-for="(product, idx) in filter_by_rating" :key="product.id">
        <div class="bg-white m-6">
          <card_product :product="product" />

          <v_button
            class="bg-blue-500 text-white border-black"
            @click="this.$store.commit('push_at_work', product)"
          >
            Взять в работу</v_button
          >
          <v_button
            class="bg-red-700 text-white border-black"
            @click="this.$store.commit('removeProduct', product.id)"
            >Удалить</v_button
          >
        </div>
      </div>
    </div>
    <div
      class="ml-10 w-3/12 p-5 border bg-amber-100 text-xl italic text-red-900 rounded-lg"
    >
      В работе
      <list_products_at_works class="mt-10 w-full" />
    </div>
    <div
      class="ml-10 w-3/12 p-5 border bg-rose-100 text-xl italic text-red-900 rounded-lg"
    >
      Выполнены
      <list_completed_products />
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
export default {
  name: "list_products",
  computed: {
    ...mapState({
      filteredRatings: (state) => state.filteredRatings,
      selectedFilter: (state) => state.selectedFilter,

      dialogCreateProduct: (state) => state.dialogCreateProduct,
      editingShow: (state) => state.editingShow,
    }),
    ...mapGetters({
      filter_by_rating: "filter_by_rating",
    }),
  },
  methods: {
    ...mapMutations({
      setFilteredRatings: "filteredRatings",
      setSelectedFilter: "setSelectedFilter",
      dialogCreateShow: "dialogCreateShow",
      push_at_work: "push_at_work",
    }),

    ...mapActions({
      fetchProducts: "fetchProducts",
    }),
  },

  mounted() {
    this.fetchProducts();
  },
};
</script>
