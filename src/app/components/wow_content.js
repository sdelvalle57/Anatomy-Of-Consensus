import React, {Component} from 'react';
import {Segment, Header, Grid, Embed, Container, Divider} from 'semantic-ui-react';

class WOWContent extends Component {
    render() {
        const user1 = {
            id: 'tlTKTTt47WE',
            att: 'My name is Maradona, and I think this is an amazing course that everyone must take.'
        } 
        const user2 = {
            id: '3CyN8rYdX6g',
            att: 'My name is Axl, from now on we will start crowdfunding our own projects'
        } 
        const videos = [[user1, user2], [user1, user2], [user1, user2]]
        return(
            <div>
                <Segment className='purpose' vertical>
                    <Header 
                        className='wowbig'
                        as='h1' 
                        content="Here's What Our Clients Have to Say" />

                    <Grid container stackable verticalAlign='middle'>
                        {videos.map((row) => {
                            return (
                                <Grid.Row  key={row}>
                                    {row.map((user) => {
                                        return(
                                        <Grid.Column key={user} width={8}>
                                            <Embed 
                                                active={true}
                                                id={user.id}
                                                source='youtube'  />
                                                <Container className = 'watch'>
                                                   {user.att}
                                                </Container>
                                                <Divider />
                                        </Grid.Column>

                                        )
                                    })}
                                    
                                    
                                </Grid.Row>
                            )
                        })}
                        
                    </Grid>
                   
                </Segment>
          </div>
        );
    }
}

export default WOWContent;