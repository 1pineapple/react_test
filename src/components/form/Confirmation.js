import React from "react";
import Checkbox from "../input/Checkbox";


class Confirmation extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.confirm();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group col-auto ">
                    <p>Duration: {this.props.form.duration} month</p>
                    <p>Amount of gigabytes in a cloud: {this.props.form.amount}GB</p>
                    <p>Upfront payment: {this.props.form.upfrontPayment ? 'yes' : 'no'}</p>
                    <p>Price: {this.props.form.price}$</p>
                </div>
                <div className="form-group col-auto">
                    <Checkbox value={this.props.form.terms}
                              update={callback => {
                                  this.props.form.terms = callback;
                                  this.props.update(this.props.form)
                              }}
                              lable="Agree with terms"
                    />
                </div>
                <div className="float-right form-group col-auto">
                    <input type="button" className="mr-2 btn btn-primary" value="< Previous"
                           onClick={this.props.previousStep}/>
                    <input type="submit" className="btn btn-primary" disabled={!this.props.form.terms}
                           value="Confirm"/>
                </div>
            </form>
        );
    }
}

export default Confirmation;