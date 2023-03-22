import { createAsyncThunk } from "@reduxjs/toolkit";
import members from "variables/member";

export const getMembers = createAsyncThunk("getMembers", async () => {
  return members;
});
