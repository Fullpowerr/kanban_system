<template>
  <div
    class="mt-10 p-3 h-auto bg-white"
    v-for="(product, i) in products_at_work"
  >
    <card_product :product="product" />
    <v_button
      v-if="!editingShow"
      class="bg-yellow-600 text-white border-black"
      @click="this.$store.commit('edit_card_product', i)"
    >
      Редактировать</v_button
    >
    <v_button
      v-if="editingShow"
      class="bg-yellow-600 text-white border-black"
      @click="this.$store.commit('save_edit_card_product', i)"
    >
      Сохранить</v_button
    >
    <v_button
      v-if="!editingShow"
      class="bg-blue-500 text-white border-black"
      @click="this.$store.commit('push_list_completed', product)"
    >
      Готово</v_button
    >
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "list_products_at_works",
  computed: {
    ...mapState({
      products_at_work: (state) => state.products_at_work,
      product: (state) => state.product,
      editingShow: (state) => state.editingShow,
    }),
  },
  methods: {
    ...mapMutations({
      edit_card_product: "edit_card_product",
      save_edit_card_product: "save_edit_card_product",
    }),
    ...mapActions({}),
  },
  mounted() {},
};
</script>
