import config from "@/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  CreateMenuCategoryPayload,
  MenuCategoryState,
  UpdateMenuCategoryPayload,
} from "./../../types/menuCategory";

const initialState: MenuCategoryState = {
  items: [],
  isLoading: false,
  error: null,
};

export const createMenuCategory = createAsyncThunk(
  "menuCategory/createMenuCategory",
  async (payload: CreateMenuCategoryPayload, thunkApi) => {
    const response = await fetch(`${config.apiBaseUrl}/menu-category`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const menuCategories = await response.json();
    thunkApi.dispatch(setMenuCategories(menuCategories));
  }
);

export const updateMenuCategory = createAsyncThunk(
  "menuCategory/updateMenuCategory",
  async (payload: UpdateMenuCategoryPayload, thunkApi) => {
    console.log(payload);

    /* const response = await fetch(`${config.apiBaseUrl}/menu-category`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const menuCategories = await response.json();
    thunkApi.dispatch(setMenuCategories(menuCategories)); */
  }
);

const menuCategorySlice = createSlice({
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
