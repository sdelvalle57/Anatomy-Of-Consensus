import React, {Component} from 'react';
import {Modal, Icon, Button, Header} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {closeModal} from '../actions/action_login';
import {addStarterPack} from '../actions/action_add_user_pack'; 
import {auth, googleProvider, facebookProvider, twitterProvider, githubProvider} from '../firebase';


class LoginModal extends Component {

    closeModal = () => {
        const {dispatch} = this.props;
        dispatch(addStarterPack("oeeSisas"))
        dispatch(closeModal());
    }
    
    loginWithGoogle = () => {
        this.closeModal();
        auth.signInWithPopup(googleProvider);
    }

    loginWithFacebook = () => {
        this.closeModal();
        auth.signInWithPopup(facebookProvider);
    }

    loginWithGithub = () => {
        this.closeModal();
        auth.signInWithPopup(githubProvider);
    }

    loginWithTwitter = () => {
        this.closeModal();
        auth.signInWithPopup(twitterProvider);
    }


    render() {
        const {login} = this.props;
        return (
            <Modal size='small' open={login.showModal} onClose={this.closeModal} >
                <Header icon='sign-in' content='Log-in or Sign-up to your account' />
                
                <Modal.Actions>
                    <Button color='google plus' onClick={this.loginWithGoogle}>
                        <Icon name='google' /> Google 
                    </Button>
                    <Button color='facebook' onClick={this.loginWithFacebook}>
                        <Icon name='facebook f' /> Facebook
                    </Button>
                    <Button onClick={this.loginWithGithub} >
                        <Icon name='github' /> Github
                    </Button>
                    <Button color='twitter' onClick={this.loginWithTwitter} >
                        <Icon name='twitter' /> Twitter
                    </Button>
                </Modal.Actions>
            </Modal>
        
        )
    }
}

function mapStateToProps(state) {
    const {login, userPacks} = state;
    return {login, userPacks};
}
  
export default connect(mapStateToProps)(LoginModal);