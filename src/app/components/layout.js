import React, {Component} from 'react';
import Head from 'next/head'
import { Container } from 'semantic-ui-react';
import Favicon from 'react-favicon';
import Footer from './footer';



class Layout extends Component {

    render() {
        return (
            <Container className='parent' >
                <Favicon url="/static/images/favicon.png" />
                <Head>
                    <link 
                        rel="stylesheet" 
                        href="/static/dist/semantic.min.css"
                    />
                </Head>
                
                {this.props.children}
                <Footer />
            </Container>
        );
    }
}

export default Layout;

