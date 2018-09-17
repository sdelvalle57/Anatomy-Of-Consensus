import React, {Component} from "react";
import { Values } from "redux-form-website-template";
import ContactForm from "../containers/form";
import { connect } from 'react-redux';


class Form extends Component {

    submit = values => {
        // print the form values to the console
        console.log("values", values)
    }

    render() {
        return (
            <div style={{ padding: 15 }}>
                <h2>Simple Form</h2>
                <ContactForm onSubmit={this.submit} />
                <Values form="data" />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {};
  }
  
  export default connect(mapStateToProps)(Form);