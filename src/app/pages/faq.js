import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Container, Header} from 'semantic-ui-react';

import PageLayout from '../containers/page_layout';
import MenuVisibility from '../containers/menu_visibility';
import FAQContent from '../components/faq_content';

class FAQ extends Component {

    render() {
        return(
            <PageLayout>
                <MenuVisibility>
                    <Container 
                        className='page'
                        textAlign='center' >
                        <Header className='homebig'
                            as='h1' 
                            content='dCom FAQ'
                            inverted />
                        <Header className='homemedium'
                            as='h2'
                            content='"Content for FAQ."'
                            inverted/>
                    </Container>
                </MenuVisibility>
                <FAQContent />
            </PageLayout>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(FAQ);
