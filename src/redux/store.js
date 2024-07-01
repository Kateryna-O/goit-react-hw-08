import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/slice";
import { contactsReducer } from "./contacts/slice";
import { filtersReducer } from "./filters/slice";
import { persistReducer } from "redux-persist";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token"],
};
const persistedReducer = persistReducer(persistConfig, authReducer);

const reducer = combineReducers({
  auth: persistedReducer,
  contacts: contactsReducer,
  filters: filtersReducer,
});

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
