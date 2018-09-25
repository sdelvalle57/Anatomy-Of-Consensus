import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Container, Header} from 'semantic-ui-react';

import PageLayout from '../containers/page_layout';
import MenuVisibility from '../containers/menu_visibility';
import ContactUsContent from '../components/contact_us_content';

class ContactUs extends Component {

    render() {
        return(
            <PageLayout>
                <MenuVisibility>
                    <Container 
                        className='page'
                        textAlign='center' >
                        <Header className='homebig'
                            as='h1' 
                            content='dCom ContactUs Us'
                            inverted />
                        <Header className='homemedium'
                            as='h2'
                            content='"Content for ContactUs us."'
                            inverted/>
                    </Container>
                </MenuVisibility>
                <ContactUsContent />
            </PageLayout>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(ContactUs);
