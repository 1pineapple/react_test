import React from "react";
import Checkbox from "../input/Checkbox";


class Confirmation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            form:props.form
        }
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.confirm();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group col-auto ">
                    <p>Duration: {this.state.form.duration} month</p>
                    <p>Amount of gigabytes in a cloud: {this.state.form.amount}GB</p>
                    <p>Upfront payment: {this.state.form.upfrontPayment ? 'yes' : 'no'}</p>
                    <p>Price: {this.state.form.price}$</p>
                </div>
                <div className="form-group col-auto">
                    <Checkbox value={this.state.form.terms}
                              update={callback => {
                                  this.setState((state) =>{state.form.terms = callback});
                                  this.props.update(this.state.form)
                              }}
                              lable="Agree with terms"
                    />
                </div>
                <div className="float-right form-group col-auto">
                    <input type="button" className="mr-2 btn btn-primary" value="< Previous"
                           onClick={this.props.previousStep}/>
                    <input type="submit" className="btn btn-primary" disabled={!this.state.form.terms}
                           value="Confirm"/>
                </div>
            </form>
        );
    }
}

export default Confirmation;