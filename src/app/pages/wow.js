import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Container, Embed, Header} from 'semantic-ui-react';

import PageLayout from '../containers/page_layout';
import MenuVisibility from '../containers/menu_visibility';
import WOWContent from '../components/wow_content';
import { checkSession } from '../actions/action_login';

class WOW extends Component {

    static getInitialProps({reduxStore, req, res}) {
        reduxStore.dispatch(checkSession(req, res));
        return {}  
    }

    render() {
        return(
            <PageLayout>
                <MenuVisibility>
                    <Container className='embedVideo'>

                        <Header className='wowbig'
                            as='h1' 
                            content='CONGRATULATIONS!'
                            inverted />

                        <Header className='homemedium'
                            as='h2'
                            content='"Please Watch This Important Video"'
                            inverted/>

                        <Embed 
                            active={true}
                            id='97FhauH1J58'
                            source='youtube'  />

                    </Container>
                </MenuVisibility>
                <WOWContent />
            </PageLayout>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(WOW);
