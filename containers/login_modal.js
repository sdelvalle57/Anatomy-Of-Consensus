import React, {Component} from 'react';
import {Modal, Icon, Button, Header} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {closeLoginModal, socialSignin} from '../actions/action_login';
import {googleProvider, facebookProvider, githubProvider} from '../firebase';



class LoginModal extends Component {

    closeModal = () => {
        const {dispatch} = this.props;
        dispatch(closeLoginModal());
    }
    
    signin = (provider)  => {
        const {dispatch} = this.props;
        this.closeModal();
        dispatch(socialSignin(provider));
    }


    render() {
        const {login} = this.props;
        return (
            <Modal size='small' open={login.showModal} onClose={this.closeModal} >
                <Header icon='sign-in' content='Log-in or Sign-up to your account' />
                
                <Modal.Actions>
                    <Button color='google plus' onClick={this.signin.bind(this, googleProvider)}>
                        <Icon name='google' /> Google 
                    </Button>
                    <Button color='facebook' onClick={this.signin.bind(this, facebookProvider)}>
                        <Icon name='facebook f' /> Facebook
                    </Button>
                    <Button onClick={this.signin.bind(this, githubProvider)} >
                        <Icon name='github' /> Github
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