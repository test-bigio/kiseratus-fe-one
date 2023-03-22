import auth from './auth/auth.slice';
import formulaReducer from './formula/formulaSlice'
import memberSlice from './member/member.slice';
import populationSlice from './population/population.slice';

const reducer = {
  formula: formulaReducer,
  auth: auth,
  population: populationSlice,
  member: memberSlice,
};

export default reducer;
