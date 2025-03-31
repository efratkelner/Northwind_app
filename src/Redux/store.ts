import { configureStore, createSlice } from "@reduxjs/toolkit";
import { ProductModel } from "../Models/ProductModel";
import { addProduct, deleteProduct, initProducts, loginUser, logoutUser, registerUser, updateProduct } from "./reducers";
import { UserModel } from "../Models/UserModel";
import { logger } from "./middleware";

// The application level entire state (all slices):
export type AppState = {
    products: ProductModel[];
    user: UserModel;
};

// Product slice: 
const productSlice = createSlice({
    name: "products", // Internal use.
    initialState: [],
    reducers: { initProducts, addProduct, updateProduct, deleteProduct }
});

// User slice: 
const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: { registerUser, loginUser, logoutUser }
});

// Action creators: 
export const productActions = productSlice.actions;
export const userActions = userSlice.actions;

// Create store:
export const store = configureStore<AppState>({
    reducer: {
        products: productSlice.reducer,
        user: userSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) as any
});
