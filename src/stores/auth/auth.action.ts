import { createAsyncThunk } from "@reduxjs/toolkit";
import users from "../../variables/users";

export const login = createAsyncThunk(
  "login",
  async (payload: { username: string; password: string }) => {
    const user = users.find((user) => user.username === payload.username);

    if (!user) {
      throw new Error("Pengguna tidak ditemukan");
    }

    if (user.role.length == 0) {
      throw new Error("Akun belum memiliki peran");
    }

    if (user.password !== payload.password) {
      throw new Error("Password tidak sesuai");
    }

    return user;
  }
);
