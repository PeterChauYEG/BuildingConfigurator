import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, initialAuthState } from '../store/authState';
import { RootState } from '../store/store';

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login: (
      state: Draft<AuthState>,
      action: PayloadAction<AuthState | undefined>,
    ): void => {
      if (action.payload) {
        state.token = action.payload.token;
      }
    },
    logout: (state: Draft<AuthState>): AuthState => {
      return initialAuthState;
    },
    setIsAuthError: (state: Draft<AuthState>): void => {
      state.isAuthError = true;
    },
  },
});

export const { login, logout, setIsAuthError } = authSlice.actions;

export const selectIsAuthError = (state: RootState): boolean =>
  state.auth.authError;
export const selectToken = (state: RootState): string => state.auth.token;
export const selectIsAuth = (state: RootState): boolean =>
  state.auth.token && state.auth.token !== '';

export default authSlice.reducer;
