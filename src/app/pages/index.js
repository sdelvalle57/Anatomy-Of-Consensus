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
            <Transition 
              visible={getStartedVisibility.visible}
              animation='fade'
              duration={500}>
              <Container text className = 'getstarted'>
                <Header className='homebig'
                  as='h1' 
                  content='Anatomy Of Consensus'
                  inverted />
                <Header className='homemedium'
                  as='h2'
                  content='"The best no fluff education system that teaches you the power of blockchain by using it."'
                  inverted/>
                <Button
                  primary 
                  size='huge' 
                  onClick={this.onGetStarterClick} >
                  Get Started
                  <Icon name='right arrow' />
                </Button>
              </Container>
            </Transition>
            <Transition
              visible={getStartedVisibility.showVideo}
              animation='fade'
              duration={500}>
              <Container className='embedVideo'>
                <Embed 
                  active={getStartedVisibility.showVideo}
                  id='h5Krh2ZmZkk'
                  
                  source='youtube'  />
              </Container>
            </Transition>
          </Segment>
        </Visibility>
        <HomeAbout />
      </Container>
    )
  }
}

function mapStateToProps(state) {
  const {getStartedVisibility, login} = state;
  return {getStartedVisibility, login};
}

export default connect(mapStateToProps)(Index);
