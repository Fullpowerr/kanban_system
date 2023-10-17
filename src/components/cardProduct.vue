<template>
  <div class="w-auto text-center bg-white p-4">
    <p v-if="!product.editing">{{ product.title }}</p>
    <textarea
      class="h-full w-full text-center"
      v-if="product.editing"
      v-model="product.title"
      @input="updateValue"
      type="text"
    />
    <p v-if="!product.editing" class="italic text-red-900">
      категория: {{ product.category }}
    </p>
    <textarea
      class="h-full w-full text-center"
      v-if="product.editing"
      v-model="product.category"
      @input="updateValue"
      type="text"
    />
    <img class="p-2 w-1/2 m-auto" :src="product.image" alt="image" />

    <textarea
      class="h-full w-full text-center"
      v-if="product.editing"
      v-model="product.description"
      @input="updateValue"
      type="text"
    />
    <p v-if="!product.editing">описание: {{ product.description }}</p>
    <textarea
      class="h-full w-full text-center"
      v-if="product.editing"
      v-model="product.price"
      @input="updateValue"
      type="text"
    />
    <p v-if="!product.editing" class="text-xl text-green-700">
      цена: ${{ product.price }}
    </p>
    <p class="text-right mr-2">рейтинг: {{ product.rating.rate }}</p>
  </div>
</template>
<script>
export default {
  name: "cardProduct",
  data() {
    return {};
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
textarea:focus {
  resize: none;
  border-radius: 5px;
  outline: none !important;
  border: 1px solid red;
}
</style>
