import React from "react";
import Radio from "../input/Radio";
import Switch from "../input/Switch";

class Info extends React.Component {
    constructor() {
        super();
        this.duration = [
            {
                option: 3
            }, {
                option: 6
            }, {
                option: 12
            },
        ];
        this.amount = [
            {
                option: 3
            }, {
                option: 5
            }, {
                option: 10
            }, {
                option: 20
            }, {
                option: 30
            }, {
                option: 50
            },
        ];
    }

    durationCallback = (callback) => {
        this.props.form.duration = callback;
        this.props.form.price = this.props.form.duration * this.props.form.amount * 2;
        if (this.props.form.upfrontPayment) {
            this.props.form.price = this.props.form.duration * this.props.form.amount * 2 - (1000 / this.props.form.price).toFixed(2);
        }
        this.props.update(this.props.form);
    };

    amountCallback = (callback) => {
        this.props.form.amount = callback;
        this.props.form.price = this.props.form.duration * this.props.form.amount * 2;
        if (this.props.form.upfrontPayment) {
            this.props.form.price = this.props.form.duration * this.props.form.amount * 2 - (1000 / this.props.form.price).toFixed(2);
        }
        this.props.update(this.props.form);
    };

    paymentCallback = () => {
        this.props.form.upfrontPayment = !this.props.form.upfrontPayment;
        this.props.form.price = this.props.form.duration * this.props.form.amount * 2;
        if (this.props.form.upfrontPayment) {
            this.props.form.price = this.props.form.duration * this.props.form.amount * 2 - (1000 / this.props.form.price).toFixed(2);
        }
        this.props.update(this.props.form);
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.nextStep();
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group col-auto">
                        <label>
                            Duration
                        </label>
                        <div className="d-flex">
                            <Radio callback={this.durationCallback} listOptions={this.duration}
                                   selected={this.props.form.duration}/>
                        </div>
                    </div>
                    <div className="form-group col-auto">
                        <label>
                            Amount of gigabytes in a cloud
                        </label>
                        <div className="d-flex">
                            <Radio callback={this.amountCallback} listOptions={this.amount}
                                   selected={this.props.form.amount}/>
                        </div>
                    </div>
                    <div className="form-group col-auto">
                        <label>
                            Upfront payment
                        </label>
                        <span>
                            <Switch isOn={this.props.form.upfrontPayment} handleToggle={this.paymentCallback}/>
                            <input className="float-right btn btn-primary" type="submit" value="Next >"/>
                        </span>
                    </div>
                </form>
            </div>
        );
    }
}

export default Info;