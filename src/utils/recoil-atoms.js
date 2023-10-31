import firebaseInstance from "@/lib/firebase";
import { atom } from "recoil";
import { selector } from "recoil";

// Asynchronous selector
export const fetchProducts = selector({
  key: "fetchProducts",
  get: async ({ get }) => {
    try {
      const response = await firebaseInstance.getProducts();
      const products = response.docs.map((data) => data.data());
      return products;
    } catch (error) {
      throw error;
    }
  },
});

export const collapsedState = atom({
  key: "collapsedState",
  default: true,
});

export const modalState = atom({
  key: "modalState",
  default: false,
});

export const searchState = atom({
  key: "searchState",
  default: false,
});

export const qModalState = atom({
  key: "qModalState",
  default: false,
});

export const addProductState = atom({
  key: "addProductState",
  default: false,
});

export const productsState = atom({
  key: "productsState",
  default: [],
});

export const quickViewProductState = atom({
  key: "quickViewProductState",
  default: null,
});
