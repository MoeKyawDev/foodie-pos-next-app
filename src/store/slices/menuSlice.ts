import { MenuState } from "@/types/menu";
import { createSlice } from "@reduxjs/toolkit";

const initialState: MenuState = {
  items: [],
  isLoading: false,
  error: null,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenus: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setMenus } = menuSlice.actions;

export default menuSlice.reducer;
