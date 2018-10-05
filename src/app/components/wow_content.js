import React, {Component} from 'react';
import {Segment, Header, Grid} from 'semantic-ui-react';

class WOWContent extends Component {
    render() {
        const videos = ['tlTKTTt47WE', 'J0KHiiTtt4w', '3CyN8rYdX6g', '09IqM6c3iT0', 'Q2x8fTTS4F8', 'ccQPesc7HFs']
        return(
            <div>
                <Segment className='purpose' vertical>
                    <Header 
                        className='wowbig'
                        as='h1' 
                        content="Here's What Our Clients Have to Say" />

                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                We Help Companies and Companions
                                </Header>
                                <p style={{ fontSize: '1.33em' }}>
                                We can give your company superpowers to do things that they never thought possible.
                                Let us delight your customers and empower your needs... through pure data analytics.
                                </p>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                We Make Bananas That Can Dance
                                </Header>
                                <p style={{ fontSize: '1.33em' }}>
                                Yes that's right, you thought it was the stuff of dreams, but even bananas can be
                                bioengineered.
                                </p>
                            </Grid.Column>
                        
                        </Grid.Row>
                    </Grid>
                   
                </Segment>
          </div>
        );
    }
}

export default WOWContent;