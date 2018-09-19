import React, {Component} from 'react';
import {Container, Header, Embed} from 'semantic-ui-react';
import HomeAbout from '../components/about_home';


class VisionPage extends Component {

    render() {
        return(
            <Container className='embedVideo'>
              
                Interestingly enough…The solutions to your personal problems like (STRESS, 
                LACK OF MONEY, BEING UNHAPPY IN YOUR JOB, WORKING LONG HOURS, THE LIST GOES 
                ON, actually lie within living the solution the the problems we collectively face 
                Like Increased Cost of Living, Global Warming, Failing Governments and Institutions.

                <p>
                WATCH: “The Third Industrial Revolution Documentary” Below To
                Discover The Challenge We Face and How You Can
                Earn More Working Less, 
                Living the Solution and 
                Being the Change You Want to See

                </p>

                <Embed 
                  active={true}
                  id='h5Krh2ZmZkk'
                  
                  source='youtube'  />
                  <HomeAbout />
              </Container>
        )
    }
}

export default VisionPage;