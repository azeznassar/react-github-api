import React from 'react';
import { withRouter } from 'react-router-dom';
import './InputForm.css';

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({input: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push(`/${this.state.input}`);
        this.setState({ input: '' });
    }


    render() {

        return (
            <div>
                <form className="inputForm">
                    <input className="username" type="text" value={this.state.input} onChange={this.handleChange} />
                    <input type="submit" className="submitButton" onClick={this.handleSubmit} value="Search for user" />
                </form>
            </div>
        );
        
    }
}

export default withRouter(InputForm);
