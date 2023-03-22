import auth from './auth/auth.slice';
import formulaReducer from './formula/formulaSlice'
import populationSlice from './population/population.slice';

const reducer = {
  formula: formulaReducer,
  auth: auth,
  population: populationSlice
};

export default reducer;
