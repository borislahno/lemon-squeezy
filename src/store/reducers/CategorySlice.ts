import { Category } from '../../pages/MonthlyReport/components/CreateMonthlyReportForm/CreateMonthlyReportForm';
import { MAIN_CATEGORIES } from '../../constants/mainCategories';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CategoryState = {
  categories: Category[]
}

const initialState: CategoryState = {
  categories: MAIN_CATEGORIES
}

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory(state, action: PayloadAction<Category>) {
      state.categories = state.categories.concat(action.payload)
    },
  }
});

export const {addCategory} = categorySlice.actions;

export default categorySlice.reducer;