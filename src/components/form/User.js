import React from "react";
import Input from "../input/Input";


class User extends React.Component {


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
                        <Input value={this.props.form.lastName.value}
                               update={callback => {
                                   this.props.form.lastName.value = callback;
                                   this.props.update(this.props.form)
                               }}
                               validation="required|alpha_space"
                               fieldValidation="lastName"
                               validate={callback => {
                                   this.props.form.lastName.validate = callback;
                                   this.props.update(this.props.form)
                               }}
                        />

                    </div>
                    <div className="form-group col-auto">
                        <label>
                            First name <span className="required">*</span>
                        </label>
                        <Input value={this.props.form.firstName.value}
                               update={callback => {
                                   this.props.form.firstName.value = callback;
                                   this.props.update(this.props.form)
                               }}
                               validation="required|alpha_space"
                               fieldValidation="firstName"
                               validate={callback => {
                                   this.props.form.firstName.validate = callback;
                                   this.props.update(this.props.form)
                               }}
                        />
                    </div>
                    <div className="form-group col-auto">
                        <label>
                            Email <span className="required">*</span>
                        </label>
                        <Input value={this.props.form.email.value}
                               update={callback => {
                                   this.props.form.email.value = callback;
                                   this.props.update(this.props.form)
                               }}
                               validation="required|email"
                               fieldValidation="email"
                               validate={callback => {
                                   this.props.form.email.validate = callback;
                                   this.props.update(this.props.form)
                               }}
                        />
                    </div>
                    <div className="form-group col-auto">
                        <label>
                            Street Address <span className="required">*</span>
                        </label>
                        <Input value={this.props.form.streetAddress.value}
                               update={callback => {
                                   this.props.form.streetAddress.value = callback;
                                   this.props.update(this.props.form)
                               }}
                               validation="required|alpha_space"
                               fieldValidation="streetAddress"
                               validate={callback => {
                                   this.props.form.streetAddress.validate = callback;
                                   this.props.update(this.props.form)
                               }}
                        />
                    </div>
                    <div className="float-right form-group col-auto">
                        <input type="button" className="mr-2 btn btn-primary" value="< Previous"
                               onClick={this.props.previousStep}/>
                        <input type="submit"
                               className=" btn btn-primary"
                               disabled={!(this.props.form.lastName.validate
                                   && this.props.form.firstName.validate
                                   && this.props.form.email.validate
                                   && this.props.form.streetAddress.validate)}
                               value="Next >"/>
                    </div>
                </form>
            </div>
        );
    }

}

export default User;