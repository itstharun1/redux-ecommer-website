import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const response = await fetch("https://fakestoreapi.in/api/products");
  return response.json();
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    data: null,
    cart:[],
    isError: false,
  },
  reducers: {
    addProduct:(state,action)=>{
      state.data=[...state.data,action.payload]
    },
    addToCart:(state,action)=>{
      state.cart=[...state.cart,action.payload]
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});


export const {addProduct,addToCart}=productSlice.actions


export default productSlice.reducer;