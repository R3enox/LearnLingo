import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  authenticated: false,
  token: null,
  user: { name: null, email: null },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, { payload: { email, name, token } }) => {
      state.isLoading = false;
      state.authenticated = true;
      state.user = { email: email, name: name };
      state.token = token;
    },
    signOut: (state) => {
      state.isLoading = false;
      state.authenticated = false;
      state.user = { name: null, email: null };
      state.token = null;
    },
  },
});

export const { setUser, signOut } = authSlice.actions;

export const authReducer = authSlice.reducer;
