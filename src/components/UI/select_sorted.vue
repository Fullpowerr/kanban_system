<template>
  <select
    class="select p-4 text-black text-lg border rounded-sm"
    :value="modelValue"
    @change="selectOptions"
    title="Сортировка по рейтингу"
  >
    <option class="option" disable value="">Сортировка по рейтингу</option>
    <option
      class="text-center"
      v-for="option in options"
      :key="option.id"
      :value="option.rate"
    >
      {{ option.value }}
    </option>
  </select>
</template>

<script>
export default {
  name: "select_sorted",
  props: {
    options: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: String,
      Number,
    },
  },
  methods: {
    selectOptions(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.select {
  border: none;
  box-shadow: 0px 0px 14px -2px rgba(11, 12, 13, 0.14);
  padding: 10px;
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;
}
.option {
  background: transparent;
}
</style>
