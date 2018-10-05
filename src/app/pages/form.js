import React, {Component} from "react";
import { connect } from 'react-redux';
import { Container } from "semantic-ui-react";
import Head from 'next/head'

import PageLayout from '../containers/page_layout';
import { checkSession } from "../actions/action_login";

class Form extends Component {
    
    static getInitialProps({reduxStore, req, res}) {
        reduxStore.dispatch(checkSession(req, res));
        return {}  
    }

    render() {
        return (
            <PageLayout>
                
                <Container className='form' >
                    <Head>
                        <script 
                            type="text/javascript" 
                            src="https://cdn.scheduleonce.com/mergedjs/so.js" />

                    </Head>
                    <div 
                        id="SOIDIV_ThomasMiller" 
                        data-so-page="ThomasMiller" 
                        data-style="border: 1px solid #d8d8d8; min-width: 290px; max-width: 900px;" 
                        data-psz="00"/>

                    </Container>
            </PageLayout>
        )
    }
}
  
  export default connect(null)(Form);