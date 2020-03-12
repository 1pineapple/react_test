import React from 'react';
import './Switch.css';

class Switch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOn: props.isOn
        }
    };

    handleChange = (event) => {
        this.setState( {
            isOn:event.target.checked
        });
        this.props.handleToggle();
    };

    render() {
        return (
            <>
                <input
                    checked={this.state.isOn}
                    onChange={this.handleChange}
                    className="react-switch-checkbox"
                    id={`react-switch-new`}
                    type="checkbox"
                />
                <label
                    style={{background: this.state.isOn && '#2196F3'}}
                    className="react-switch-label"
                    htmlFor={`react-switch-new`}
                >
                    <span className={`react-switch-button`}/>
                </label>
            </>
        );
    }
}

export default Switch;