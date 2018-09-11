import { combineReducers } from 'redux';
import ReducerFixedMenu from './reducer_fixed_menu';
import ReducerGetStarted from './reducer_get_started';
import ReducerLogin from './reducer_login';
import ReducerUserPack from './reducer_user_pack';

const rootReducer = combineReducers({
    fixedMenu: ReducerFixedMenu,
    getStartedVisibility: ReducerGetStarted,
    login: ReducerLogin,
    userPacks: ReducerUserPack
})

export default rootReducer;
