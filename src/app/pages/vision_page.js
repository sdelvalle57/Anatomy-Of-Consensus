import React, {Component} from 'react';
import {Container, Embed} from 'semantic-ui-react';
import {connect} from 'react-redux'

import VisionContent from '../components/vision_content';
import PageLayout from '../containers/page_layout';
import MenuVisibility from '../containers/menu_visibility';

import {checkSession} from '../actions/action_login';

class VisionPage extends Component {

    static getInitialProps({reduxStore, req, res}) {
        reduxStore.dispatch(checkSession(req, res));
        return {}  
    }

    render() {
        return(
            <PageLayout>
                <MenuVisibility>
                    <Container className='embedVideo'>

                        <Container text>
                            Interestingly enough…The solutions to your personal problems like (STRESS, 
                            LACK OF MONEY, BEING UNHAPPY IN YOUR JOB, WORKING LONG HOURS, THE LIST GOES 
                            ON, actually lie within living the solution the the problems we collectively face 
                            Like Increased Cost of Living, Global Warming, Failing Governments and Institutions.
                        </Container>
                        

                        <Container className = 'watch'>
                            WATCH: “The Third Industrial Revolution Documentary” Below To
                            Discover The Challenge We Face and How You Can
                            Earn More Working Less, 
                            Living the Solution and 
                            Being the Change You Want to See
                        </Container>

                        <Embed 
                            active={true}
                            id='QX3M8Ka9vUA'
                            source='youtube'  />

                    </Container>
                </MenuVisibility>

                <VisionContent />
            </PageLayout>
        )
    }
}

export default connect(null)(VisionPage);