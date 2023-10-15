<template>
  <form
    id="my-form"
    class="flex right-0 bottom-0 left-0 top-0 fixed dialog"
    @submit.prevent
    @click.stop="closeDialogCreateShow"
  >
    <div
      @click.stop
      class="justify-center h-auto m-auto bg-gray-50 rounded-lg p-2"
    >
      <div>
        <div class="flex flex-col p-4 items-center">
          <v_input
            class="m-2"
            v-model="product.title"
            type="text"
            placeholder="заголовок"
            maxlength=""
          />
          <v_input
            class="m-2"
            v-model="product.category"
            type="text"
            placeholder="категория"
            maxlength=""
          />
          <v_input
            class="m-2"
            v-model="product.description"
            type="text"
            placeholder="описание"
          />
          <v_input
            class="m-2"
            v-model="product.price"
            type="number"
            placeholder="цена"
            maxlength=""
          />
          <v_input
            class="m-2"
            v-model="product.rating"
            type="number"
            maxlength="1"
            placeholder="рейтинг"
          />
        </div>
        <v_button
          @click="createProduct"
          class="bg-blue-500 text-white border-black"
          >создать продукт</v_button
        >
      </div>
    </div>
  </form>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "create_form",
  computed: {
    ...mapState({
      product: (state) => state.product,
    }),
  },
  methods: {
    ...mapMutations({
      closeDialogCreateShow: "closeDialogCreateShow",
      createProduct: "createProduct",
    }),
  },
};
</script>
<style scoped>
.dialog {
  background: rgba(0, 0, 0, 0.5);
}
</style>
