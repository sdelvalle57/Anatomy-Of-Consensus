import React, {Component} from 'react';
import { Container, Visibility } from 'semantic-ui-react';
import Menu from '../containers/menu_home';
import Footer from '../components/footer';


class PageLayout extends Component {

    hideFixedMenu = () => {
        const {dispatch} = this.props;
        dispatch(showFixedMenu(false));
      } 
    
      showFixedMenu = () => {
        const {dispatch} = this.props;
        dispatch(showFixedMenu(true));
      } 

    render() {
        return(
            <Visibility
                once={false}
                onBottomPassed={this.showFixedMenu}
                onBottomPassedReverse={this.hideFixedMenu}>
                <Container className="parent">
                    

                    <Menu />
                    

                    {this.props.children}
                    <Footer />
                </Container>
                
            </Visibility>
        );
    }
}

export default PageLayout;
