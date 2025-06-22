import { create } from "zustand";

export const useFilterStore = create((set) => ({
  selectedFilter: {
    category: "shoes",
    subcategory: "sneakers",
  },
  setSelectedFilter: (filter) => set({ selectedFilter: filter }),
}));

export const useMenuStore = create((set) => ({
  selectedMenu: "about",
  setSelectedMenu: (menu) => set({ selectedMenu: menu }),
}));
