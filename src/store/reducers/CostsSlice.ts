import { MonthlyReport } from '../../pages/MonthlyReport/components/CreateMonthlyReportForm/CreateMonthlyReportForm';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CostsState = {
  monthlyReports: MonthlyReport[]
}

const initialState: CostsState = {
  monthlyReports: []
}

const monthlyReportSlice = createSlice({
  name: 'monthlyReports',
  initialState,
  reducers: {
    addMonthlyReport(state, action: PayloadAction<MonthlyReport>) {
      state.monthlyReports = state.monthlyReports.concat(action.payload)
    },
    deleteMonthlyReport(state, action: PayloadAction<string>) {
      state.monthlyReports = state.monthlyReports.filter(report => report.id !== action.payload);
    },
    editMonthlyReport(state, action: PayloadAction<MonthlyReport>) {
      state.monthlyReports = state.monthlyReports.map(report => {
        if (report.id === action.payload.id) {
          return action.payload;
        }
        return report;
      })
    }
  }
});

export const {addMonthlyReport, deleteMonthlyReport,editMonthlyReport} = monthlyReportSlice.actions;

export default monthlyReportSlice.reducer;