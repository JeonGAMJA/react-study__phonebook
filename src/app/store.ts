import { combineReducers, configureStore } from '@reduxjs/toolkit'
import contactReducer from '../redux/contactSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import logger from 'redux-logger'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, contactReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
