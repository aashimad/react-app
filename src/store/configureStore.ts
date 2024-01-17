import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { productSlice } from './feature/index'
import { routerMiddleware} from 'connected-react-router';
import { createBrowserHistory } from "history";

const store = () =>
  configureStore({
    reducer: {
      [productSlice.name]: productSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          PRODUCT_BASE_API_URL: '',
        },
      },
      serializableCheck: false,
      history
    }),
  devTools: true,
});


export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore['dispatch'];
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;
export default store;
// useDispatch and useSelector hooks for Type safing
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const history = createBrowserHistory();


