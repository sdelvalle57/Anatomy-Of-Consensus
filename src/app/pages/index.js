import React, { Component } from 'react'
import {Button, Container, Header, Icon} from 'semantic-ui-react';
import { connect } from 'react-redux';

import {openLoginModal} from '../actions/action_login';
import {getStarterClicked, getStartedInitial} from '../actions/action_get_started';
import {changePageName, switchTo} from '../actions/action_pager_admin';
import {HOME_PAGE} from '../actions/types';

import PageLayout from '../containers/page_layout';


class Index extends Component {

  static getInitialProps({reduxStore}) {
    reduxStore.dispatch(changePageName(HOME_PAGE));
    return {};
  }

  componentWillReceiveProps({getStarted, dispatch, login}) {
    if(getStarted.clicked && !!login.user.uid && !!login.user.sessionToken) {
      console.log("login", login)
      dispatch(getStartedInitial());
      //`/lotteries/new/${factoryAddress}`
      dispatch(switchTo(`/vision_page/${login.user.sessionToken}`));
    }
  }

  onGetStarterClick = () => {
    const {dispatch, login} = this.props;
    console.log("login", login)

    if(!!login.user.uid && !!login.user.sessionToken) {
      dispatch(switchTo(`/vision_page/${login.user.sessionToken}`));
    } else if(!login.loading) {
      dispatch(getStarterClicked());
      dispatch(openLoginModal());
    }
  }

  render() {
    return (
      <PageLayout>
        <Container 
          className = "parent" 
          textAlign='center' >
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
      </PageLayout>
    )
  }
}

function mapStateToProps(state) {
  const {login, getStarted} = state;
  return {login, getStarted};
}

export default connect(mapStateToProps)(Index);
