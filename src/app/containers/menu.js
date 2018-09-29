import React, {Component } from 'react';
import { Menu, Container, Button, Popup } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Router from 'next/router';

import {openLoginModal, performLogout, getUser} from '../actions/action_login';
import {addStarterPack, addEthLoanPack} from '../actions/action_add_user_pack';
import {HOME_PAGE, STARTER_PACK_PAGE} from '../actions/types';



const style = {
  background: 'gray',
  color: 'white',
  padding: '1em',
  borderRadius: '6px'
}

class Header extends Component {

  

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(getUser());
  }

  onLogClick = () => {
    const { login, dispatch } = this.props
    
    if(!!login.user.uid) {
      dispatch(performLogout());
    } else {
      dispatch(openLoginModal());
    }
  }

  goHome = () => {
    Router.push(`/index`)
  }

  goStarterPack = () => {
    const { login, userPacks } = this.props
    if(!!login.user.uid) {
      if(userPacks.blockchainStarterPack) {
        
        //Router.push(`/starter_pack/${login.user.uid}`)
        Router.push(`/starter_pack`)
      } else {
        console.log("You dont have access to blockchainStarterPack")
      }
    } else if(!login.loading) {
      this.onLogClick();
    }
  }

  goLoanPack = () => {
    const { login, userPacks } = this.props
    if(!!login.user.uid) {
      if(userPacks.ethLoan) {
        //Router.push(`/eth_loan_pack/${login.user.uid}`)
        //Router.push(`/eth_loan_pack`)
      } else {
        console.log("You dont have access to eth_loan_pack")
      }
    } else if(!login.loading) {
      this.onLogClick();
    }
  }

  addStarterPack = () => {
    const { login, userPacks, dispatch } = this.props
    if(!!login.user.uid) {
      if(userPacks.blockchainStarterPack) {
        console.log("You already have access to the Starter pack")
      } else {
        dispatch(addStarterPack(login.user.uid));
      }
    } else if(!login.loading) {
      this.onLogClick();
    }
  }

  addLoanPack = () => {
    const { login, userPacks, dispatch } = this.props
    if(!!login.user.uid) {
      if(userPacks.ethLoan) {
        console.log("You already have access to the Eth Loan pack")
      } else {
        dispatch(addEthLoanPack(login.user.uid));
      }
    } else if(!login.loading) {
      this.onLogClick();
    }
  }

  checkCurrent = (page) => {
    console.log(page);
    return true;
  }

  renderLogButton() {
    const { fixedMenu, login } = this.props
    const fixed = fixedMenu.fixed;
    return(
      <Menu.Item position='right' >
        <Button as='a' inverted={!fixed} onClick={this.onLogClick} loading={login.loading} disabled={login.loading}>
          {!!login.user.uid? 'Log out':'Log in'}
        </Button>
        
      </Menu.Item>
    )
  }

  render() {
    const { fixedMenu, login, currentPage } = this.props
    const fixed = fixedMenu.fixed;
    const disabled = login.loading || login.user.uid=='';
    console.log("currentpage", currentPage.currentPage + ' '+HOME_PAGE);
      return (
        <Menu
          fixed={fixed ? 'top' : null}
          inverted={!fixed}
          pointing={!fixed}
          secondary={!fixed}
          size='large'>
            <Container>

              <Menu.Item 
                onClick = {this.goHome} 
                as='a' 
                active = {currentPage.currentPage==HOME_PAGE}> 
                Home 
              </Menu.Item>

              <Menu.Item 
                onClick = {this.goStarterPack} 
                as='a' 
                active = {currentPage.currentPage==STARTER_PACK_PAGE}>
                Starter Pack
              </Menu.Item>

              <Popup
                trigger={
                  <Menu.Item onClick = {this.goLoanPack} as='a'>ETH Loan</Menu.Item>
                }
                on='click'
                content="Coming soon!"
                className = 'comingsoon'
                style = {style}
                hideOnScroll
                position = 'bottom right'
              />
              
              
              {this.renderLogButton()}
              
            </Container>
          </Menu>
      )
  }
}


function mapStateToProps(state) {
  const {fixedMenu, login, currentPage, userPacks} = state;
  return {fixedMenu, login, currentPage, userPacks};
}

export default connect(mapStateToProps)(Header);


