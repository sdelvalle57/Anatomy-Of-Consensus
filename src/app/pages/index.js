import React, { Component } from 'react'
import {Button, Container, Header, Icon, Segment, Visibility, Transition, Embed} from 'semantic-ui-react';
import { connect } from 'react-redux';
import {showFixedMenu} from '../actions/action_fixed_menu';
import {getStarted, showVideo, getStarterClicked} from '../actions/action_get_started';
import {openLoginModal} from '../actions/action_login';

import {getUser} from '../actions/action_login'
import HomeMenu from '../containers/menu_home';
import HomeAbout from '../components/about_home';
import LoginModal from '../containers/login_modal';
import { Router } from '../routes';


class Index extends Component {

  static getInitialProps() {
    //login
    //database
    //dispatch to redux
    return {};
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(getUser());
  }

  componentWillReceiveProps({dispatch, getStartedVisibility, login}) {
    if(getStartedVisibility.clicked && !!login.user.uid) {
      dispatch(getStarted());
      setTimeout(() => {
        dispatch(showVideo())
      }, 500)
    }
  }

  hideFixedMenu = () => {
    const {dispatch} = this.props;
    dispatch(showFixedMenu(false));
  } 

  showFixedMenu = () => {
    const {dispatch} = this.props;
    dispatch(showFixedMenu(true));
  } 

  onGetStarterClick = () => {
    Router.pushRoute('/vision_page');
    /*
    const {dispatch, login} = this.props;
    if(!!login.user.uid) {
      dispatch(getStarted());
      setTimeout(() => {
        dispatch(showVideo())
      }, 500)
    } else if(!login.loading) {
      dispatch(getStarterClicked())
      dispatch(openLoginModal());
    }
    */
  }

  
  render() {
    const {getStartedVisibility} = this.props
    return (
      <Container className = "parenthome">
        <LoginModal />
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}>
          <Segment
            inverted
            textAlign='center'
            className='getstarted'>
            <HomeMenu/>

            <Container text className = 'getstarted'>
                <Header className='homebig'
                  as='h1' 
                  content='dCom Regional Development'
                  inverted />
                <Header className='homemedium'
                  as='h2'
                  content='"The best no fluff education system that teaches you how to use the 
                  blockchain by using it to create your regional Internet Service Provider."'
                  inverted/>
                <Button
                  primary 
                  size='huge' 
                  onClick={this.onGetStarterClick} >
                  Get Started
                  <Icon name='right arrow' />
                </Button>
              </Container>

        
          </Segment>
        </Visibility>
        
      </Container>
    )
  }
}

function mapStateToProps(state) {
  const {getStartedVisibility, login} = state;
  return {getStartedVisibility, login};
}

export default connect(mapStateToProps)(Index);
