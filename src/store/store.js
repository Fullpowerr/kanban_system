import { requestProducts } from "../Api/getApi.js";
import { createStore } from "vuex";
export default createStore({
  state: () => ({
    product: {
      category: "",
      description: "",
      id: "",
      image: "",
      price: "",
      rating: { rate: 0, count: 0 },
      title: "",
    },
    products: [],
    products_at_work: [],
    completed_products: [],
    selectedFilter: "",
    filteredRatings: [
      { rate: 5, value: "5" },
      { rate: 4, value: "от 4 до 5" },
      { rate: 3, value: "от 3 до 4" },
      { rate: 2, value: "от 2 до 3" },
      { rate: 1, value: "от 1 до 2" },
    ],
    dialogCreateProduct: false,
    editingShow: false,
  }),
  getters: {
    filter_by_rating(state) {
      if (!state.selectedFilter) {
        return state.products;
      } else {
        return state.products.filter(
          (product) =>
            product.rating.rate >= +state.selectedFilter &&
            product.rating.rate <= +state.selectedFilter + 1
        );
      }
    },
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setSelectedFilter(state, selectedFilter) {
      state.selectedFilter = selectedFilter;
    },
    removeProduct(state, payload) {
      state.element = state.products.findIndex((el) => el.id === payload);
      if (state.element !== -1) {
        state.products.splice(state.element, 1);
      }
    },

    setFilteredRatings(state, filteredRatings) {
      state.filteredRatings = filteredRatings;
    },
    createProduct(state) {
      if (state.product.description || state.product.title || state.category) {
        state.products.push({
          category: state.product.category,
          description: state.product.description,
          id: state.product.id,
          image: state.product.image,
          price: state.product.price,
          rating: (state.product.rating = {
            rate: 0,
          }),
          title: state.product.title,
          edit: false,
        });
      }
      (state.product.category = ""),
        (state.product.title = ""),
        (state.product.description = ""),
        (state.product.id = ""),
        (state.product.price = "");
      (state.product.rating = {
        rate: "",
      }),
        (state.dialogCreateProduct = false);
    },
    dialogCreateShow(state) {
      state.dialogCreateProduct = true;
    },
    closeDialogCreateShow(state) {
      state.dialogCreateProduct = false;
      state.product.category = "";
      state.product.description = "";
      state.product.price = "";
      state.product.title = "";
      state.product.rating = "";
    },
    edit_card_product(state, payload) {
      state.products_at_work[payload].editing = true;
      state.editingShow = true;
    },
    save_edit_card_product(state, payload) {
      state.products_at_work[payload].editing = false;
      state.editingShow = false;
    },
    push_at_work(state, payload) {
      state.product_at_work = { ...payload, editing: false };
      state.products_at_work.unshift(state.product_at_work);
      state.element = state.products.findIndex((el) => el.id === payload.id);
      if (state.element !== -1) {
        state.products.splice(state.element, 1);
      }
    },
    push_list_completed(state, payload) {
      state.completed_products.unshift(payload);
      state.element = state.products_at_work.findIndex(
        (el) => el.id === payload.id
      );
      if (state.element !== -1) {
        state.products_at_work.splice(state.element, 1);
      }
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await requestProducts.get("products");
        commit("setProducts", response.data);
      } catch (e) {
        alert("ERROR");
      }
    },
  },
  namespaced: true,
});
