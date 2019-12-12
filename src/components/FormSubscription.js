import React from "react";
import Info from "./form/Info";
import User from "./form/User";
import CreditCard from "./form/CreditCard";
import Confirmation from "./form/Confirmation";
import axios from 'axios';

class FormSubscription extends React.Component {
    constructor() {
        super();
        this.state = {
            step: 1,
            confirm:false,
            error:false,
            form: {
                duration: 12,
                amount: 5,
                upfrontPayment: false,
                lastName: {
                    value: '',
                    validate: false
                },
                firstName: {
                    value: '',
                    validate: false
                },
                email: {
                    value: '',
                    validate: false
                },
                streetAddress: {
                    value: '',
                    validate: false
                },
                cardNumber: {
                    value: '',
                    validate: false
                },
                cardExpirationDate: {
                    value: '',
                    validate: false
                },
                cardSecurityCode: {
                    value: '',
                    validate: false
                },
                price: 120,
                terms: false,
            },
        };
        this.handlerConfirm = this.handlerConfirm.bind(this);
    }

    handlerNextStep = () => {
        this.setState(
            {
                step: this.state.step + 1
            });
    };

    handlerPreviousStep = () => {
        this.setState(
            {
                step: this.state.step - 1
            });
    };

    handlerUpdate = (form) => {
        this.setState({
            form: form
        })
    };

    handlerConfirm = () => {
        let form = this.state.form;
        axios.post('https://httpbin.org/post', {form}).then(resp => console.log(resp)).catch(error => console.log(error));
    };

    render() {
        return (
            <div className="d-flex justify-content-center mt-5 border p-lg-5">
                {this.state.step === 1 &&
                <Info nextStep={this.handlerNextStep} form={this.state.form} update={this.handlerUpdate}/>}
                {this.state.step === 2 &&
                <User nextStep={this.handlerNextStep} previousStep={this.handlerPreviousStep} form={this.state.form}
                      update={this.handlerUpdate}/>}
                {this.state.step === 3 &&
                <CreditCard nextStep={this.handlerNextStep} previousStep={this.handlerPreviousStep}
                            form={this.state.form}
                            update={this.handlerUpdate}/>}
                {this.state.step === 4 &&
                <Confirmation confirm={this.handlerConfirm} previousStep={this.handlerPreviousStep}
                              form={this.state.form}
                              update={this.handlerUpdate}/>}
            </div>
        );
    }
}

export default FormSubscription;