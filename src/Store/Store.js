import { configureStore } from "@reduxjs/toolkit";

import ProductsSlice from "./Slices/Products_Slice";
import Cart_Slice from "./Slices/Cart_Slice";
export const Store = configureStore({

    reducer: {
        Products : ProductsSlice ,
        cart: Cart_Slice
    }
})