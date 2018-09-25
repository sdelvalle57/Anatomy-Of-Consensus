import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Container, Header} from 'semantic-ui-react';

import PageLayout from '../containers/page_layout';
import MenuVisibility from '../containers/menu_visibility';
import StarterPackContent from '../components/starter_pack_content';

import {switchToPage} from '../actions/action_current_page';
import {STARTER_PACK_PAGE} from '../actions/types';

import { Router } from '../routes';

class StarterPack extends Component {

    static getInitialProps({reduxStore}) {
        reduxStore.dispatch(switchToPage(STARTER_PACK_PAGE));
        return {};
    }

    componentWillReceiveProps({login}) {
        if(!login.user.uid) {
            Router.pushRoute('/');
        }
    }

    render() {
        return(
            <PageLayout>
                <MenuVisibility>
                    <Container 
                        className='page'
                        textAlign='center' >
                        <Header className='homebig'
                            as='h1' 
                            content='dCom Starter Pack'
                            inverted />
                        <Header className='homemedium'
                            as='h2'
                            content='"Content for Starter Pack."'
                            inverted/>
                    </Container>
                </MenuVisibility>
                <StarterPackContent />
            </PageLayout>
        )
    }
}

function mapStateToProps(state) {
    const {login} = state;
    return {login};
}

export default connect(mapStateToProps)(StarterPack);
