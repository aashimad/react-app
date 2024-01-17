import type { AppDispatch } from "../configureStore";
import { AnyAction, AsyncThunk, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { IntialProduct } from "../../types/productTypes";
import type { ProductResponse } from "../../services/model";
import {productAPI} from '../../services/requests';
import {ProductType, ProductData} from '../../types/productTypes'

type GenericAsyncThunk = AsyncThunk<
  ProductResponse,
  unknown,
  {
    dispatch: AppDispatch;
    state: IntialProduct;
  }
>;

type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;

function isPendingGenericAction(action: AnyAction): action is PendingAction {
  return action.type.endsWith('/pending');
}
function isFulfilledAction(action: AnyAction): action is FulfilledAction {
  return action.type.endsWith('/fulfilled');
}
function isRejectedAction(action: AnyAction): action is RejectedAction {
  return action.type.endsWith('/rejected');
}

export const getProductDetailsSliceReq = createAsyncThunk<
  ProductType[],
  {},
  {
    dispatch: any;
    state: IntialProduct;
    extra: {
      PRODUCT_BASE_API_URL: string;
    };
  }
>('appProduct/getProduct', async () => {
  const res = await productAPI.get();
  const typedObjects: ProductType[] = res.map((item: ProductType) => {
    return new ProductData(item); // Constructing instances based on the items in the array
  });
  return typedObjects;
});

const initialState: IntialProduct = {
  isLoading: false,
  hasError: false,
  product: [],
  inCartQty: 0,
  status: ''
}

export const productSlice = createSlice({
  name : 'appProduct',
  initialState,
  reducers: {
    increaseCartQty: (state, action) => {
      state.inCartQty = state.inCartQty + 1;
    },
    decreaseCartQty: (state, action) => {
      state.inCartQty = state.inCartQty > 0 ? state.inCartQty - 1 : 0
    }
  },
  extraReducers: builder => {
    builder.addCase(getProductDetailsSliceReq.fulfilled, (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.status = 'success';
      state.product = action.payload;
    });
    builder.addMatcher(isRejectedAction, (state: IntialProduct, action: any) => {
      state.isLoading = false;
      state.hasError = true;
      state.status = 'rejected';
    });
    builder.addMatcher(isPendingGenericAction, (state: IntialProduct) => {
      state.isLoading = true;
      state.hasError = false;
      state.status = 'pending';
    });
  }
})

export const  {
  increaseCartQty,
  decreaseCartQty
} = productSlice.actions;
