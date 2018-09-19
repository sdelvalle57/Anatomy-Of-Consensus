import React, {Component} from "react";
import { Values } from "redux-form-website-template";
import ContactForm from "../containers/form";
import { connect } from 'react-redux';
import { Container } from "semantic-ui-react";


class Form extends Component {

    submit = values => {
        // print the form values to the console
        console.log("values", values)
    }

    render() {
        return (
            <div style={{ padding: 15 }}>
                <Container>
                <div id="SOIDIV_ThomasMiller" data-so-page="ThomasMiller" data-height="550" data-style="border: 1px solid #d8d8d8; min-width: 290px; max-width: 900px;" data-psz="00"></div>
<script type="text/javascript" src="https://cdn.scheduleonce.com/mergedjs/so.js"></script>
                </Container>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {};
  }
  
  export default connect(mapStateToProps)(Form);