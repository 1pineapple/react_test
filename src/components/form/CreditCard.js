import React from "react";
import CardInput from "../input/CardInput";
import Input from "../input/Input";


class CreditCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            form:props.form
        }
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
                            Card number <span className="required">*</span>
                        </label>
                        <CardInput value={this.state.form.cardNumber.value}
                                   mask="9999 9999 9999 9999"
                                   update={callback => {
                                       this.setState((state) =>{state.form.cardNumber.value = callback});
                                       this.props.update(this.state.form)
                                   }}
                                   validation="required|card_num"
                                   fieldValidation="cardNumber"
                                   validate={callback => {
                                       this.setState((state) =>{state.form.cardNumber.validate = callback});
                                       this.props.update(this.state.form)
                                   }}
                        />
                    </div>
                    <div className="form-group col-auto">
                        <label>
                            Card expiration date <span className="required">*</span>
                        </label>
                        <CardInput value={this.state.form.cardExpirationDate.value}
                                   mask="99/99"
                                   update={callback => {
                                       this.setState((state) =>{state.form.cardExpirationDate.value = callback});
                                       this.props.update(this.state.form)
                                   }}
                                   validation="required|card_exp"
                                   fieldValidation="cardExpirationDate"
                                   validate={callback => {
                                       this.setState((state) =>{state.form.cardExpirationDate.validate = callback});
                                       this.props.update(this.state.form)
                                   }}
                        />
                    </div>
                    <div className="form-group col-auto">
                        <label>
                            Card security code <span className="required">*</span>
                        </label>
                        <Input value={this.state.form.cardSecurityCode.value}
                                   update={callback => {
                                       this.setState((state) =>{state.form.cardSecurityCode.value = callback});
                                       this.props.update(this.state.form)
                                   }}
                                   validation="required|numeric|min:3|max:3"
                                   fieldValidation="cardSecurityCode"
                                   validate={callback => {
                                       this.setState((state) =>{state.form.cardSecurityCode.validate = callback});
                                       this.props.update(this.state.form)
                                   }}
                        />
                    </div>
                    <div className="float-right form-group col-auto">
                        <input type="button" className="mr-2 btn btn-primary" value="< Previous"
                               onClick={this.props.previousStep}/>
                        <input type="submit" className=" btn btn-primary"
                               disabled={!(this.state.form.cardNumber.validate
                                   && this.state.form.cardExpirationDate.validate
                                   && this.state.form.cardSecurityCode.validate)}
                               value="Next >"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreditCard;