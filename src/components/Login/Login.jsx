import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

const LoginForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field validate={[required]} component={Input} name={'email'} placeholder="Email"/></div>
            <div><Field validate={[required]} component={Input} name={'password'} placeholder="Password"
                        type={"password"}/></div>
            <div><Field component={Input} name={'rememberMe'} type="checkbox"/> remember me</div>
            <div>
                <button>Login</button>
            </div>
        </form>)

}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = props => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>;
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});


export default connect(mapStateToProps, {login})(Login);