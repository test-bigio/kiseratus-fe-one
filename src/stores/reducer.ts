import auth from './auth/auth.slice';
import formulaReducer from './formula/formulaSlice'
import jadwal40Slice from './jadwal40.ts/jadwal40Slice';

const reducer = {
  jadwal40: jadwal40Slice,
  formula: formulaReducer,
  auth: auth
};

export default reducer;
