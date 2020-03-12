import React from "react";
import Radio from "../input/Radio";
import Switch from "../input/Switch";

class Info extends React.Component {
    constructor(props) {
        super(props);
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
        this.state = {
            form:props.form
        }
    }


    countPrice = ()=>{
        this.setState((state) =>{state.form.price=state.form.duration*state.form.amount * 2});
        if (this.state.form.upfrontPayment) {
            this.setState((state) =>{state.form.price = state.form.duration * state.form.amount * 2 - (1000 / state.form.price).toFixed(2)});
        }
    };

    durationCallback = (callback) => {
        this.setState((state) =>{state.form.duration = callback});
        this.countPrice();
        this.props.update(this.state.form);
    };

    amountCallback = (callback) => {
        this.setState((state) =>{state.form.amount = callback});
        this.countPrice();
        this.props.update(this.state.form);
    };

    paymentCallback = () => {
        this.setState((state) =>{state.form.upfrontPayment = !state.form.upfrontPayment});
        this.countPrice();
        this.props.update(this.state.form);
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
                                   selected={this.state.form.duration}/>
                        </div>
                    </div>
                    <div className="form-group col-auto">
                        <label>
                            Amount of gigabytes in a cloud
                        </label>
                        <div className="d-flex">
                            <Radio callback={this.amountCallback} listOptions={this.amount}
                                   selected={this.state.form.amount}/>
                        </div>
                    </div>
                    <div className="form-group col-auto">
                        <label>
                            Upfront payment
                        </label>
                        <span>
                            <Switch isOn={this.state.form.upfrontPayment} handleToggle={this.paymentCallback}/>
                            <input className="float-right btn btn-primary" type="submit" value="Next >"/>
                        </span>
                    </div>
                </form>
            </div>
        );
    }
}

export default Info;