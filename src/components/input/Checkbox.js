import React from "react";
import './Checkbox.css';

class Checkbox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        };
    };

    handleChange = () => {
        this.setState((state) => {
            state.value = !state.value
        });
        this.props.update(!this.state.value)
    };

    render() {
        return (
            <label className="checkcontainer">
                {this.props.lable}
                <input type="checkbox" value={this.state.value} onChange={this.handleChange}/>
                <span className="checkbox"></span>
            </label>
        );
    }
}

export default Checkbox;