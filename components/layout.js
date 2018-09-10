import React, {Component} from 'react';
import Head from 'next/head'
import { Container } from 'semantic-ui-react';
import Favicon from 'react-favicon';
import Header from '../containers/header';

class Layout extends Component {

    render() {
        return (
            <Container >
                <Favicon url="/static/images/favicon.png" />
                <Head>
                    <link 
                        rel="stylesheet" 
                        href="/static/dist/semantic.min.css"
                    />
                </Head>
                <Header />
                {this.props.children}
            </Container>
        );
    }
}

export default Layout;

