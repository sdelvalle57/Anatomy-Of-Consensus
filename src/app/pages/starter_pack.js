import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Container, Header} from 'semantic-ui-react';

import PageLayout from '../containers/page_layout';
import MenuVisibility from '../containers/menu_visibility';
import StarterPackContent from '../components/starter_pack_content';

import {validateUser} from '../actions/action_login';
import {changeName, changePageName, switchTo} from '../actions/action_pager_admin';
import {STARTER_PACK_PAGE} from '../actions/types';


class StarterPack extends Component {

    static async getInitialProps(ctx) {
        const {reduxStore} = ctx;
        reduxStore.dispatch(validateUser(ctx));
        reduxStore.dispatch(changePageName(STARTER_PACK_PAGE));
        return {}
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
