import React, {Component} from 'react';
import {Segment, Container, List, Grid, Header} from 'semantic-ui-react';
import { Link } from '../routes';

class Footer extends Component {
    render() {
        return(
            <Segment inverted vertical className='footer' >
            <Container>
              <Grid divided inverted stackable>
                <Grid.Row>
                  <Grid.Column width={3}>
                    <Header inverted as='h4' content='About' />
                    
                    <List link inverted>
                      <List.Item>
                        <Link route={`/about_us`}>
                              About us
                        </Link>
                      </List.Item>
                      <List.Item>
                        <Link route={`/contact_us`}>
                              Contact us
                        </Link>
                      </List.Item>
                      <List.Item>
                        <Link route={`/webinars`}>
                              Webinars
                        </Link>
                      </List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Header inverted as='h4' content='Services' />
                    <List link inverted>
                      <List.Item>
                        <Link route={`/faq`}>
                            FAQ
                        </Link>
                      </List.Item>
                      <List.Item>
                        <Link route={`/how_to_buy_ether`}>
                              How To Buy Ether
                        </Link>
                      </List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={4} className='watermark'>
                    <Header as='h4' inverted>
                      A dCom Production
                    </Header>
                    <p>
                      @ 2018 dComRegionalDevelopment <br />
                      All Rights Reserved<br />
                      Privacy Policy Legal Policy.
                    </p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
        )
    }
}

export default Footer;