import { createAsyncThunk } from "@reduxjs/toolkit";
import users from "../../variables/users";

export const login = createAsyncThunk(
  "login",
  async (payload: { username: string; password: string }) => {
    const user = users.find((user) => user.username === payload.username);

    if (!user) {
      throw new Error("User not found");
    }

    if (user.password !== payload.password) {
      throw new Error("Password is incorrect");
    }

    return user;
  }
);
