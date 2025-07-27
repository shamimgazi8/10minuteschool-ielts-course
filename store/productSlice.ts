import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductData } from "@/types/product";

interface ProductState {
  data: ProductData | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchProduct = createAsyncThunk<ProductData>(
  "product/fetchProduct",
  async () => {
    const res = await fetch(
      "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=en",
      {
        headers: {
          "X-TENMS-SOURCE-PLATFORM": "web",
        },
      }
    );
    if (!res.ok) throw new Error("Failed to fetch product");
    const data = await res.json();
    return data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed";
      });
  },
});

export default productSlice.reducer;
