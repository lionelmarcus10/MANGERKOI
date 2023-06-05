import { configureStore } from '@reduxjs/toolkit'
import ListSlice from './ListSlice'
import LogSlice from './LogSlice';
import DataSlice from './DataSlice';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from "redux";
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import PlanificationSlice from './PlanificationSlice';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
}

const rootReducer = combineReducers({ 
  ListItem : ListSlice,
  LogItem : LogSlice,
  DataItem : DataSlice,
  PlanificationItem : PlanificationSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: {
    reducer: persistedReducer,
  }
})

export const persistor = persistStore(store);