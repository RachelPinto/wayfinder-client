import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { createUser } from '../actions/users';
import { login } from '../actions/auth';
import Input from './input';
import { required, nonEmpty, matches, length, isTrimmed } from '../validators';
import './styles/create-user-form.css';

const passwordLength = length({ min: 10, max: 72 });
const matchesPassword = matches('password');

export class CreateUserForm extends React.Component {
    onSubmit(values) {
        const { username, password, firstName, lastName, symptoms } = values;
        const user = { username, password, firstName, lastName, symptoms };
        return this.props
            .dispatch(createUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        return (
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label htmlFor="firstName">First name</label>
                <Field component={Input} type="text" name="firstName" />
                <label htmlFor="lastName">Last name</label>
                <Field component={Input} type="text" name="lastName" />
                <label htmlFor="username">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <label htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    validate={[required, passwordLength, isTrimmed]}
                />
                <label htmlFor="passwordConfirm">Confirm password</label>
                <Field
                    component={Input}
                    type="password"
                    name="passwordConfirm"
                    validate={[required, nonEmpty, matchesPassword]}
                />
                <label htmlFor="symptoms">What would you like to track?</label>
                <Field
                    component={Input}
                    type="text"
                    name="symptoms"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <button
                    className="btn"
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Sign Up
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'create-user',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('create-user', Object.keys(errors)[0]))
})(CreateUserForm);




