import React from 'react';
import Github from '../Github/Github';

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
                <form>
                    <label>
                        username:
                        <input type="text" value={this.state.input} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" onClick={this.handleSubmit} />
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
