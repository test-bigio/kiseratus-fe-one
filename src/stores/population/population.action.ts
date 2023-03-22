import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const countries = [
  "Indonesia",
  "Thailand",
  "Vietnam",
  "Japan",
  "China",
  "India",
];

export const getPopulations = createAsyncThunk("getPopulations", async () => {
  const promises = countries.map((country) => {
    return axios.get(
      `https://get-population.p.rapidapi.com/population/country`,
      {
        params: { country },
        headers: {
          "X-RapidAPI-Key":
            "8829e8cc95msh23decd94300ebe9p146f5ajsnfa1948361110",
          "X-RapidAPI-Host": "get-population.p.rapidapi.com",
        },
      }
    );
  });

  const responses = await Promise.all(promises);

  return responses.map((response) => response.data);
});
