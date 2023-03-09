import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer'
import { combineReducers } from 'redux'
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    persistStore,
} from 'redux-persist'
import configSlice from './config'
import { configureStore } from '@reduxjs/toolkit'

const reducers = combineReducers({
  config: configSlice.reducer
})

const persistConfig = {
  key: 'pioneering-programmers-test-app-store',
  storage,
  whitelist: ['config'],
  blacklist: []
};

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store)

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
