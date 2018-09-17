import React, {Component} from 'react';
import {Button, Container, Divider, Grid, Header, Image, List, Segment} from 'semantic-ui-react';
import { Link } from '../routes';

class HomeAbout extends Component {
    render() {
        return(
            <div>
            <Segment className='homecontent' vertical>
            <Grid container stackable verticalAlign='middle'>
              <Grid.Row>
                <Grid.Column width={8}>
                  <Header  as='h1'>
                    What is Consensus? 
                  </Header>
                  <p>Well according to the Merriam Webster dictionary: </p>
                  <p>Consensus is "an agreement"</p>
                  <p>Expanding on this definition, AOC will take a fresh look at this mechanism "consensus" through the eyes of new blockchain capabilities. This mechanism "consensus" is important because its how we can get:</p>
                  <ul>
                    <li> Governments to trust eachother (preventing wars).</li>
                    <li> Government departments to trust each other.</li>
                    <li> Banks to trust each other</li>
                    <li> Mend the devide between corporations, governments and it's citizens.</li>
                    <li> And truely live the peer to peer dream where we treat each other as equals.</li><br />
                  </ul>
                  <p>Fundamentally, we are dealing with the erosion of trust in our fragile society.</p>
                
                </Grid.Column>
                <Grid.Column floated='right' width={6}>
                  <Image bordered rounded size='large' src='/static/images/white-image.png' />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign='center'>
                  <Link route={`/form`}>
                    <a>
                      <Button size='huge'>Check it Out</Button>
                    </a>
                  </Link>
                </Grid.Column>
              </Grid.Row>
              
            </Grid>
          </Segment>

          <Segment className='purpose' vertical>
            <Container>
              <Divider
                as='h1'
                className='header'
                horizontal>
                What is the purpose of this system?
              </Divider>

              <p >
                The purpose of this system is purely educational and designed 
                to demonstrate how blockchain technology can be use to rebuild 
                trust in our society, moving towards a society that flourishes 
                and works for all parties once again.
              </p>

              <p>
                Oftentimes it's hard to describe new paradibm shifts and fare 
                more effective experiencing the process, which is why as you 
                explore this site we offer to take you by the hand and guide 
                you through the process of understanding the Anatomy of 
                Consensus (AOC) throught the eyes of this humanity saving 
                technology where you are empowered to interact with the 
                ethereum blockchain global computing network.
              </p>

              <Link route={`/form`}>
                <a>
                  <Button >Continue</Button>
                </a>
              </Link>
            
              <Divider
                as='h1'
                className='header'
                horizontal>
                What can I expect?
              </Divider>
             
              <p>
               You will get hands on experience excuting almost raw 
               transactions with the new web 30. (web of trust).
              </p>

              <p>
              As you step through this process we will take you behind the 
              scenies of this educational experience and show you how to explore 
              the ethereum transactions that power this process.
              </p>

              <p>
              You will be relieved to find out, this educational journey 
              is very direct and to the point.
              </p>

              <p>
              Due to the transparent nature of the blockchain embeded in the 
              protocol level of ethereum there is no point wasting your time 
              with fluff and no point trying to sell you anthing. If you like 
              the future of what blockchain stands for thein it will make snese 
              to learn more.
              </p>

              <Link route={`/form`}>
                <a>
                  <Button >I Want To Know More</Button>
                </a>
              </Link>

            </Container>
            <Divider
                as='h1'
                className='header'
                horizontal>
                How Do I Get Started?
            </Divider>
            <Container>
              <p>
                Good question, simply login with your google account below, 
                and follow the steps to aquire some ether (the token used to 
                power smart contracts) and then you'll beable to exexute your 
                first Smart Contract that will give you access to the Blockchain 
                Starter Pack where you will learn:
              </p>
              <ul>
                <li>How to monitor all transactions of the Ethereum Ecosystem</li>
                <li>Explore why blockchain technology is so appropriate for our 
                  evolving society's needs</li>
                <li>Protect yourself against good and bad hackers.</li>
                <li>Mend the devide between corporations, governments and it's citizens.</li>
                <li>And present you with a list of paths you can take to actively participate 
                  in this global infrastructure upgrade.</li>
              </ul>
              <Link route={`/form`}>
                <a>
                  <Button >I'm Still Quite Interested</Button>
                </a>
              </Link>
            </Container>
          </Segment>

          <Segment inverted vertical >
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
                  <Grid.Column width={7}>
                    <Header as='h4' inverted>
                      Footer Header
                    </Header>
                    <p>
                      Extra space for a call to action inside the footer that could 
                      help re-engage users.
                    </p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
          </div>
        );
    }
}

export default HomeAbout;