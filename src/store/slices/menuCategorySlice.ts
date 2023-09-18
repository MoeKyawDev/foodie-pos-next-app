import { MenuCategoryState } from "@/types/menuCategory";
import { createSlice } from "@reduxjs/toolkit";

const initialState: MenuCategoryState = {
  items: [],
  isLoading: false,
  error: null,
};

export const menuCategorySlice = createSlice({
  name: "menuCategory",
  initialState,
  reducers: {
    setMenuCategories: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setMenuCategories } = menuCategorySlice.actions;

export default menuCategorySlice.reducer;
