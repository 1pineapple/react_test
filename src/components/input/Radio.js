import React from "react";
import "./Radio.css";

class Radio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: props.selected
        };
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    handleOptionChange = (changeEvent)=> {
        let value = Number(changeEvent.target.value);
        this.setState({
            selectedOption: value
        });
        this.props.callback(value);
    };

    render() {
        return (
                this.props.listOptions.map((item, index) => (
                <div key={index} className="radio-item">
                    <label className="checkcontainer radio-inline">
                        {item.option}
                        <input type="radio"  value={item.option} checked={item.option === this.state.selectedOption}
                               onChange={this.handleOptionChange}/>
                        <span className="checkmark"></span>
                    </label>
                </div>
                ))
        );
    }
}

export default Radio;