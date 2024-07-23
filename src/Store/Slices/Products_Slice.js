import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchApi = createAsyncThunk(
  'productsSlice/fetchApi',
  async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    return data.products;  // Return the array of products
  }
)

const productsSlice = createSlice({
  initialState: {
    products: [],
    status: 'idle',
    error: null
  },
  name: "productsSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApi.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchApi.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchApi.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
})

export default productsSlice.reducer;
