import { Action, configureStore, ConfigureStoreOptions, ThunkAction } from '@reduxjs/toolkit';
import moveSlice from 'features/pokemonDetails/services/movesSlice';
import { pokemonDetailsApi } from 'features/pokemonDetails/services/pokemonDetailsApi';
import { pokemonsApi } from 'features/pokemonsHome/services/pokemonsApi';

const configureAppStore = (options?: ConfigureStoreOptions['preloadedState'] | undefined) =>
  configureStore({
    reducer: {
      moves: moveSlice,
      // Only RTK Query
      [pokemonsApi.reducerPath]: pokemonsApi.reducer,
      [pokemonDetailsApi.reducerPath]: pokemonDetailsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(pokemonsApi.middleware, pokemonDetailsApi.middleware),
    ...options,
  });

export const store = configureAppStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
