import React, {Component} from 'react';
import {Button, Container, Divider, Grid, Header, Icon, List, Segment} from 'semantic-ui-react';
import { Link } from '../routes';


class HomeAbout extends Component {
    render() {
        return(
            <div>

          <Segment className='purpose' vertical>
            <Container className='home'> 

              <p >
                If you too would like a purposeful life, being the change you want 
                to see in the world and powerfully moving society to 
                <strong> The Third Industrial Revolution</strong>
              </p>

              <p><strong>
                You can request a FREE Consultation below to discover exactly 
                how you can help achieve this.</strong>
              </p><br />

              <Divider
                horizontal>
                <p><i>
                ***Please do not apply for a free call if you are <strong><ins>
                not willing</ins></strong> to:</i>
                </p>
              </Divider>
             
                <ul><i>
                  <li>How to monitor all transactions of the Ethereum Ecosystem</li>
                  <li>Explore why blockchain technology is so appropriate for our 
                    evolving society's needs</li>
                  <li>Protect yourself against good and bad hackers.</li>
                  <li>Mend the devide between corporations, governments and it's citizens.</li>
                  <li>And present you with a list of paths you can take to actively participate 
                    in this global infrastructure upgrade.</li></i>
                </ul>
              

              <p><strong>
                ***And if you are not willing to invest time and money into your business***
                </strong></p>

              <Link route={`/form`}>
                <a>
                  <Button primary size='huge' className='know_more' >
                    Reserve Your Free Consultation NOW!
                    <Icon name='right arrow' />
                  </Button>
                </a>
              </Link>

            </Container>
            
            
          </Segment>

          
          </div>
        );
    }
}

export default HomeAbout;