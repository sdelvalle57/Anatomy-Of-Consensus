import React, {Component} from "react";
import { connect } from 'react-redux';
import { Container } from "semantic-ui-react";

import PageLayout from '../containers/page_layout';

class Form extends Component {
    
    render() {
        return (
            <PageLayout>
                
                <Container >
                    <div id="SOIDIV_ThomasMiller" data-so-page="ThomasMiller" data-style="border: 1px solid #d8d8d8; min-width: 290px; max-width: 900px;" data-psz="00"></div>

                    </Container>
            </PageLayout>
        )
    }
}
  
  export default connect(null)(Form);