import { createSlice } from "@reduxjs/toolkit";
import { login } from "./auth.action";
import { auth, authModel } from "./auth.type";

const defaultAuth: auth = {
  id: "",
  username: "",
  role: [],
};

const initialState: authModel = {
  auth: defaultAuth,
  loader: false,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.auth = action.payload
    },
    setEmptyAuth: (state) => {
      state.auth = defaultAuth
    }
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.error = ""
      state.loader = true
      state.auth = defaultAuth
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.loader = false
      state.auth = action.payload
    })
    builder.addCase(login.rejected, (state, action) => {
      state.loader = false
      state.error = action.error.message || "Something went wrong"
    })
  }
});

export const { setAuth } = authSlice.actions

export default authSlice.reducer;
