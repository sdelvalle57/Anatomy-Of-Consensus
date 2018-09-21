import React, { Component } from 'react'
import {Button, Container, Header, Icon, Segment} from 'semantic-ui-react';
import { connect } from 'react-redux';

import {getUser} from '../actions/action_login'
import LoginModal from '../containers/login_modal';
import { Router } from '../routes';
import PageLayout from '../containers/page_layout';


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
    return (
      <PageLayout>
        <Container 
          className = "parenthome" 
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
            <LoginModal />
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
  const {getStartedVisibility, login} = state;
  return {getStartedVisibility, login};
}

export default connect(mapStateToProps)(Index);
