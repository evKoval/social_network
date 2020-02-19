import React from "react";
import { reduxForm } from "redux-form";
import { Input, createField } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";
import styles from "../common/FormsControls/FormsControls.module.css";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", "email", [required], Input)}
      {createField("Password", "password", [required], Input, {
        type: "password"
      })}
      {createField(null, "rememberMe", [], Input, { type: "checkbox" }, "remember me")}
      {captchaUrl && (
        <div>
          <img src={captchaUrl} alt="captcha" />
          {createField("type your answer here", "captcha", [required], Input)}
          <button>Send</button>
        </div>
      )}
      <div>
        <button>Login</button>
      </div>
      {error && <div className={styles.formSummaryError}>{error}</div>}
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = props => {
  const onSubmit = formData => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl
});

export default connect(mapStateToProps, { login })(Login);
