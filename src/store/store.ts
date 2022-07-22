import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import authReducer, { logout as authLogout } from '../reducers/authReducer';
import storage from 'redux-persist/lib/storage';
import { PersistConfig, Persistor } from 'redux-persist/es/types';
import { EnvironmentNameEnum } from '../enums/EnvironmentNameEnum';
import { isServer } from '../constants/server';

export const reducers = combineReducers({
  auth: authReducer,
});

const createNoopStorage = () => {
  return {
    getItem(_key: string) {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: string) {
      return Promise.resolve();
    },
  };
};

const safeStorage = isServer ? createNoopStorage() : storage;

const persistConfig: PersistConfig<any> = {
  key: 'root',
  version: 1,
  storage: safeStorage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REHYDRATE, PAUSE, PERSIST, REGISTER, PURGE, FLUSH],
      },
    }),
  devTools:
    process.env.ENVIRONMENT_NAME !== EnvironmentNameEnum.RELEASE ||
    process.env.NEXT_PUBLIC_ENVIRONMENT_NAME === EnvironmentNameEnum.RELEASE,
});

export const persistor: Persistor = persistStore(
  store,
  !isServer &&
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export const resetStore = async () => {
  await persistor.purge();
  store.dispatch(authLogout());
  await persistor.flush();
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
