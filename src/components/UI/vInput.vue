<template>
  <input
    class="border rounded-md border-zinc-400 w-80 text-center"
    :value="modelValue"
    @input="updateInput"
    title="вводите данные"
  />
</template>

<script>
export default {
  name: "vInput",
  props: {
    modelValue: [String, Number, Object],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
input::-webkit-input-placeholder {
  text-align: center;
}

input:-moz-placeholder {
  /* Firefox 18- */
  text-align: center;
}

input::-moz-placeholder {
  /* Firefox 19+ */
  text-align: center;
}

input:-ms-input-placeholder {
  text-align: center;
}
</style>
