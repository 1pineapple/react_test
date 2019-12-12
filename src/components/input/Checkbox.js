import React from "react";
import './Checkbox.css';

class Checkbox extends React.Component{

    handleChange = () => {
        this.props.update(!this.props.value)
    };

    render() {
        return (
            <label className="checkcontainer">
                {this.props.lable}
                <input type="checkbox" value={this.props.value} onChange={this.handleChange}/>
                <span className="checkbox"></span>
            </label>
        );
    }
}

export default Checkbox;