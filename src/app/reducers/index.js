import { combineReducers } from 'redux';
import ReducerFixedMenu from './reducer_fixed_menu';
import ReducerGetStarted from './reducer_get_started';
import ReducerLogin from './reducer_login';
import ReducerUserPack from './reducer_user_pack';
import ReducerCurrentPage from './reducer_current_page';

const rootReducer = combineReducers({
    fixedMenu: ReducerFixedMenu,
    getStarted: ReducerGetStarted,
    login: ReducerLogin,
    userPacks: ReducerUserPack,
    currentPage: ReducerCurrentPage
})

export default rootReducer;
