import React, {Component } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {performLogin, performLogout} from '../actions/action_login';

class Header extends Component {
 
  onLogClick = () => {
    const { login, dispatch } = this.props
    if(login.loged) {
      dispatch(performLogout());
    } else {
      dispatch(performLogin());
    }
  }

  render() {
    const { fixedMenu, login } = this.props
    const fixed = fixedMenu.fixed;
      return (
        <Menu
          fixed={fixed ? 'top' : null}
          inverted={!fixed}
          pointing={!fixed}
          secondary={!fixed}
          size='large'>
            <Container>
              <Menu.Item as='a' active>
                Home
              </Menu.Item>
              <Menu.Item as='a'>Work</Menu.Item>
              <Menu.Item as='a'>Company</Menu.Item>
              <Menu.Item as='a'>Careers</Menu.Item>
              <Menu.Item position='right'>
                <Button as='a' inverted={!fixed} onClick={this.onLogClick}>
                  {login.loged? 'Log out':'Log in'}
                </Button>
                
              </Menu.Item>
            </Container>
          </Menu>
      )
  }
}


function mapStateToProps(state) {
  const {fixedMenu, login} = state;
  return {fixedMenu, login};
}

export default connect(mapStateToProps)(Header);


