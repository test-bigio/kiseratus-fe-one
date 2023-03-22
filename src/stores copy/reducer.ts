import auth from './auth/auth.slice';
import formulaReducer from './formula/formulaSlice'

const reducer = {
  formula: formulaReducer,
  auth: auth
};

export default reducer;
