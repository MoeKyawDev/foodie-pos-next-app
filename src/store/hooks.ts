import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from ".";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch; // Use to dispatch actions
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; // Use to get data from store