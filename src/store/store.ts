import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './reducers/CategorySlice';
import monthlyReportReducer from './reducers/CostsSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { currencyApi } from '../services/currencyService';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  categoryReducer,
  monthlyReportReducer,
  [currencyApi.reducerPath]: currencyApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(currencyApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch;