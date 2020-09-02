import * as actions from './actions';
import { initialState, mutations } from './mutations';
import { storeGenerator } from '@/store/base/baseStore';
const userStore = storeGenerator(actions, initialState, mutations);
export default userStore;

