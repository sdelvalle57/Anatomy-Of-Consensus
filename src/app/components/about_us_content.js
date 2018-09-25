import React, {Component} from 'react';
import {Container, Segment} from 'semantic-ui-react';

class AboutUsContent extends Component {
    render() {
        return(
            <div>
                <Segment className='purpose' vertical>
                    <Container className='home'> 
                    <p >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum. 
                        <strong> The standard Lorem Ipsum passage</strong>
                    </p>
                    <p><strong>
                    Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC.</strong>
                    </p><br />
                    </Container>
                </Segment>
          </div>
        );
    }
}

export default AboutUsContent;