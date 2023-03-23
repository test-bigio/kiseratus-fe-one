import auth from './auth/auth.slice';
import formulaReducer from './formula/formulaSlice'
import memberSlice from './member/member.slice';
import populationSlice from './population/population.slice';
import UnikStore from "../views/admin/unik/redux/unikStore";
import configurtionStore from "../views/admin/unik/redux/configurtionStore";

const reducer = {
  formula: formulaReducer,
  unikForm: UnikStore,
  confFormStore: configurtionStore,
  auth: auth,
  population: populationSlice,
  member: memberSlice,
};

export default reducer;
