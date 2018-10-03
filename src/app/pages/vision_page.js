import React, {Component} from 'react';
import {Container, Embed} from 'semantic-ui-react';
import {connect} from 'react-redux'

import VisionContent from '../components/vision_content';
import PageLayout from '../containers/page_layout';
import MenuVisibility from '../containers/menu_visibility';

import {switchTo} from '../actions/action_pager_admin';

class VisionPage extends Component {

    static getInitialProps({reduxStore, req, res}) {
        //we check wether is a session cookie saved, if not
        //then we go to check the url params /vision_page/:token
        //see routes.js.
        //If nothing was sent inside the params, express will
        //redirect to index, see server.js
        
        //console.log('reduxStore', state);
        const user = req && req.session ? req.session.decodedToken : null;
        console.log(user);
        //TODO: fetch from database
        // don't fetch anything from firebase if the user is not found
        //const snap = user && await req.firebaseServer.database().ref('messages').once('value')
        if(user == null && req) {
            res.redirect('/index');
            res.end();
        } else if(!req) {
            const state = reduxStore.getState();
            if(!state.login || !state.login.user || !state.login.user.uid
                || !state.login.res || !state.login.res.data || 
                !state.login.res.data.decodedToken){
                    reduxStore.dispatch(switchTo('/index'));
            }
        }
        return {}  
      }

    componentDidMount() {
        const {dispatch} = this.props;
        
        //console.log('query', token);
        //dispatch(validateUser(token));
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