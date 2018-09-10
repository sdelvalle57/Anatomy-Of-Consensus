import React, {Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from '../routes';

class Header extends Component {
 
  render() {
      return (
        <Container >
          <Menu style={{ marginTop: '10px' }}>
            <Link route="/">
              <a className="item">ERC20 Token</a>
            </Link>
      
           
        </Menu>
      </Container>
      )
  }
}

export default Header;


