import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Container, Header} from 'semantic-ui-react';

import PageLayout from '../containers/page_layout';
import MenuVisibility from '../containers/menu_visibility';
import WebinarsContent from '../components/webinars_content';

class Webinars extends Component {

    render() {
        return(
            <PageLayout>
                <MenuVisibility>
                    <Container 
                        className='page'
                        textAlign='center' >
                        <Header className='homebig'
                            as='h1' 
                            content='dCom Webinars'
                            inverted />
                        <Header className='homemedium'
                            as='h2'
                            content='"Content for Webinars."'
                            inverted/>
                    </Container>
                </MenuVisibility>
                <WebinarsContent />
            </PageLayout>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(Webinars);
