<template>
  <div class="mt-10 p-3 h-auto bg-white" v-for="(product, i) in products_at_work">
    <cardProduct :product="product" />
    <vButton v-if="!product.editing" class="bg-yellow-600 text-white border-black"
      @click="this.$store.commit('edit_card_product', i)">
      Редактировать</vButton>
    <vButton v-if="product.editing" class="bg-yellow-600 text-white border-black"
      @click="this.$store.commit('save_edit_card_product', i)">
      Сохранить</vButton>
    <vButton v-if="!product.editing" class="bg-blue-500 text-white border-black"
      @click="this.$store.commit('push_list_completed', product)">
      Готово</vButton>
  </div>
</template> 

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "listProductsAtWorks",
  computed: {
    ...mapState({
      products_at_work: (state) => state.products_at_work,
      product: (state) => state.product,
      editingShow: (state) => state.editingShow,
      produt: (state) => state.product
    }),
  },
  methods: {
    ...mapMutations({
      edit_card_product: "edit_card_product",
      save_edit_card_product: "save_edit_card_product",

    }),
  },
};
</script>
