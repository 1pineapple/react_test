import React from 'react';
import './Switch.css';

class Switch extends React.Component {

    render() {
        return (
            <>
                <input
                    checked={this.props.isOn}
                    onChange={this.props.handleToggle}
                    className="react-switch-checkbox"
                    id={`react-switch-new`}
                    type="checkbox"
                />
                <label
                    style={{ background: this.props.isOn && '#2196F3' }}
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