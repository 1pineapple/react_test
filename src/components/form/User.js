import React from "react";
import Input from "../input/Input";


class User extends React.Component {
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
                            Last name <span className="required">*</span>
                        </label>
                        <Input value={this.state.form.lastName.value}
                               update={callback => {
                                   this.setState((state) =>{state.form.lastName.value = callback});
                                   this.props.update(this.state.form)
                               }}
                               validation="required|alpha_space"
                               fieldValidation="lastName"
                               validate={callback => {
                                   this.setState((state) =>{state.form.lastName.validate = callback});
                                   this.props.update(this.state.form)
                               }}
                        />

                    </div>
                    <div className="form-group col-auto">
                        <label>
                            First name <span className="required">*</span>
                        </label>
                        <Input value={this.state.form.firstName.value}
                               update={callback => {
                                   this.setState((state) =>{state.form.firstName.value = callback});
                                   this.props.update(this.state.form)
                               }}
                               validation="required|alpha_space"
                               fieldValidation="firstName"
                               validate={callback => {
                                   this.setState((state) =>{state.form.firstName.validate = callback});
                                   this.props.update(this.state.form)
                               }}
                        />
                    </div>
                    <div className="form-group col-auto">
                        <label>
                            Email <span className="required">*</span>
                        </label>
                        <Input value={this.state.form.email.value}
                               update={callback => {
                                   this.setState((state) =>{state.form.email.value = callback});
                                   this.props.update(this.state.form)
                               }}
                               validation="required|email"
                               fieldValidation="email"
                               validate={callback => {
                                   this.setState((state) =>{state.form.email.validate = callback});
                                   this.props.update(this.state.form)
                               }}
                        />
                    </div>
                    <div className="form-group col-auto">
                        <label>
                            Street Address <span className="required">*</span>
                        </label>
                        <Input value={this.state.form.streetAddress.value}
                               update={callback => {
                                   this.setState((state) =>{state.form.streetAddress.value = callback});
                                   this.props.update(this.state.form)
                               }}
                               validation="required|alpha_space"
                               fieldValidation="streetAddress"
                               validate={callback => {
                                   this.setState((state) =>{state.form.streetAddress.validate = callback});
                                   this.props.update(this.state.form)
                               }}
                        />
                    </div>
                    <div className="float-right form-group col-auto">
                        <input type="button" className="mr-2 btn btn-primary" value="< Previous"
                               onClick={this.props.previousStep}/>
                        <input type="submit"
                               className=" btn btn-primary"
                               disabled={!(this.state.form.lastName.validate
                                   && this.state.form.firstName.validate
                                   && this.state.form.email.validate
                                   && this.state.form.streetAddress.validate)}
                               value="Next >"/>
                    </div>
                </form>
            </div>
        );
    }

}

export default User;