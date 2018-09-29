import React, {Component} from 'react';
import {Segment, Container, List, Grid, Header} from 'semantic-ui-react';
import Link from 'next/link';

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
                        <Link href={`/about_us`}>
                              <a>About us</a>
                        </Link>
                      </List.Item>
                      <List.Item>
                        <Link href={`/contact_us`}>
                          <a>Contact us</a>
                        </Link>
                      </List.Item>
                      <List.Item>
                        <Link href={`/webinars`}>
                          <a>Webinars</a>
                        </Link>
                      </List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Header inverted as='h4' content='Services' />
                    <List link inverted>
                      <List.Item>
                        <Link href={`/faq`}>
                          <a>FAQ</a>
                        </Link>
                      </List.Item>
                      <List.Item>
                        <Link href={`/how_to_buy_ether`}>
                          <a>How To Buy Ether</a>
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