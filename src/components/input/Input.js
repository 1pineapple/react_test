import React from "react";
import SimpleReactValidator from 'simple-react-validator';

class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value:props.value
        };
        this.validator = new SimpleReactValidator({autoForceUpdate: this});
    }

    handleChange = (event) => {
        this.setState({value:event.target.value});
        this.props.update(event.target.value);
    };

    render() {
        return (
            <>
                <input className="form-control" type="text" value={this.state.value} onChange={this.handleChange}
                       onClick={() => {
                           this.validator.showMessageFor(this.props.fieldValidation);
                       }}
                       onKeyUp={() => !this.validator.allValid() ? this.props.validate(false) : this.props.validate(true)}
                />
                {this.validator.message(this.props.fieldValidation, this.state.value, this.props.validation)}
            </>
        );
    }
}

export default Input;