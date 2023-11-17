import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from '../features/users/user.reducer';
import categoryReducer from '../features/category/category.reducer';
import drinksReducer from '../features/drinks/drinks.reducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
    drink: drinksReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
