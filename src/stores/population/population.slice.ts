import { getPopulations } from './population.action';
import { createSlice } from "@reduxjs/toolkit";
import { Population, PopulationModel } from "./population.type";

const defaultPopulation: Population = {
  count: 0,
  country: "",
  readable_format: "",
};

const initialState: PopulationModel = {
	population: defaultPopulation,
  populations: [],
  loader: false,
	error: "",
	status: 'idle'
};

const populationSlice = createSlice({
  name: "population",
  initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getPopulations.pending, (state) => {
			state.loader = true;
		});
		builder.addCase(getPopulations.fulfilled, (state, action) => {
			state.loader = false;
			state.populations = action.payload;
		});
		builder.addCase(getPopulations.rejected, (state, action) => {
			state.loader = false;
			state.error = action.error.message || "Something went wrong";
		});
	}
});

export default populationSlice.reducer;
