import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Container, Header} from 'semantic-ui-react';

import PageLayout from '../containers/page_layout';
import MenuVisibility from '../containers/menu_visibility';
import HTBEContent from '../components/htbe_content';

class HTBE extends Component {

    render() {
        return(
            <PageLayout>
                <MenuVisibility>
                    <Container 
                        className='page'
                        textAlign='center' >
                        <Header className='homebig'
                            as='h1' 
                            content='dCom How To Buy Ether'
                            inverted />
                        <Header className='homemedium'
                            as='h2'
                            content='"Content for How To Buy Ether."'
                            inverted/>
                    </Container>
                </MenuVisibility>
                <HTBEContent />
            </PageLayout>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(HTBE);
