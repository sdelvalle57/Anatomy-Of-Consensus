import React, {Component} from 'react';
import {Visibility} from 'semantic-ui-react';
import {connect} from 'react-redux';

import {showFixedMenu} from '../actions/action_fixed_menu';

class MenuVisibility extends Component {

    hideFixedMenu = () => {
        const {dispatch} = this.props;
        dispatch(showFixedMenu(false));
    } 
    
    showFixedMenu = () => {
        const {dispatch} = this.props;
        dispatch(showFixedMenu(true));
    } 

    render() {
        return(
            <Visibility
                once={false}
                onBottomPassed={this.showFixedMenu}
                onBottomPassedReverse={this.hideFixedMenu}>
                {this.props.children}
            </Visibility>
        )
    }
}

export default connect(null)(MenuVisibility)


