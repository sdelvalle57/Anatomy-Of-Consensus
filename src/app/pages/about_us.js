import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Container, Header} from 'semantic-ui-react';

import PageLayout from '../containers/page_layout';
import MenuVisibility from '../containers/menu_visibility';
import AboutUsContent from '../components/about_us_content';

class AboutUs extends Component {

    render() {
        return(
            <PageLayout>
                <MenuVisibility>
                    <Container 
                        className='page'
                        textAlign='center' >
                        <Header className='homebig'
                            as='h1' 
                            content='dCom About Us'
                            inverted />
                        <Header className='homemedium'
                            as='h2'
                            content='"Content for About us."'
                            inverted/>
                    </Container>
                </MenuVisibility>
                <AboutUsContent />
            </PageLayout>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(AboutUs);
