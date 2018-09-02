import React from 'react';
import Github from '../Github/Github';
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
        this.setState({ submitted: true });
        //console.log(this.state.input);
    }

    render() {
        if (!this.state.submitted) {
            return (
                <form className="inputForm">
                    <input className="username" type="text" value={this.state.input} onChange={this.handleChange} />
                    <input className="submitButton" type="submit" value="Search for user" onClick={this.handleSubmit} />
                </form>  
            );
        }

        return(
            <Github username={this.state.input} />
            //stuck
        );
    }
}

export default InputForm;
