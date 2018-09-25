import React, {Component} from 'react';
import { Container } from 'semantic-ui-react';

import Menu from './menu';
import Footer from '../components/footer';
import LoginModal from './login_modal';
import {connect} from 'react-redux';


class PageLayout extends Component {

    render() {
        return(
            <Container className="parent">
                <LoginModal />
                <Menu />
                {this.props.children}
                <Footer />
            </Container>
        );
    }
}

function mapStateToProps(state) {
    const {login} = state;
    return {login};
}

export default connect(mapStateToProps)(PageLayout);
