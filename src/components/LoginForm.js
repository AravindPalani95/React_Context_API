import React from 'react'
import '../styles/LoginForm.css'

class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = { username: "", password: "", formError: "", showFormError: false, usernameError: "", passwordError: "" };
    }
    render() {
        this.theme = this.props.theme;
        if (this.props.showForm)
            return (
                <div id="login-card">
                    <div id="alter-card" class="alert alert-danger alert-dismissible fade show" role="alert" style={{ "display" : this.state.showFormError ? "block":"none" }}>
                        <a href="/#;" class="alert-link">{this.state.formError}</a>
                        <span type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={this.closeAlert.bind(this)}>
                            <span aria-hidden="true">&times;</span>
                        </span>
                    </div>
                    <h1 style={this.theme.text} className="title-login">SIGN IN</h1>
                    <form id="signin-form" onSubmit={this.submitForm.bind(this)}>
                        <div class="input-group" id="form-input">
                            <input name="username" type="text" className="form-control bottom-space" style={this.theme.input} placeholder="Enter Username" value={this.state.username} onChange={this.handleFormInput} />
                            <div class="invalid-feedback d-block">{this.state.usernameError}</div>
                        </div>
                        <div class="input-group" id="form-input">
                            <input name="password" type="password" className="form-control bottom-space" style={this.theme.input} placeholder="Enter Password" value={this.state.password} onChange={this.handleFormInput} />
                            <div class="invalid-feedback d-block">{this.state.passwordError}</div>
                        </div>
                        <button type="submit" className="btn button-style bottom-space" style={this.theme.signinBtn}>SIGN IN</button>
                        <h6 style={this.theme.text}>Forgot password ? <span id="password-link"><u>click here</u></span></h6>
                    </form>

                </div>
            );
        else
            return (null);
    }

    handleFormInput = (event) => {
        console.info(event.target.name);
        if (event.target.name === "username"){
            this.setState({ username: event.target.value });
            this.setState({ usernameError: event.target.value.length !== 0 ? "" : this.state.usernameError});
        }
        else{
            this.setState({ password: event.target.value });
            this.setState({ passwordError: event.target.value.length !== 0 ? "" : this.state.passwordError});
        }
    }

    submitForm(event) {
        event.preventDefault();
        if(this.validForm())
        {
            this.props.toggleLoader(true);
            setTimeout(()=>{
                this.props.toggleLoader(false);
            },3000);
            this.setState({ formError : "Invalid Credentials", showFormError: true });
        }
    }

    closeAlert(){
        this.setState({showFormError : false});
    }

    validForm(){
        if(this.state.username.length === 0 && this.state.password.length === 0)
        {
            this.setState({usernameError : "Please Enter Username" });
            this.setState({ passwordError: "Please Enter Password" });    
            return false;
        }
        else if(this.state.username.length === 0){
            this.setState({usernameError : "Please Enter Username" });
            return false;
        }
        else if(this.state.password.length === 0)
        {
            this.setState({ passwordError: "Please Enter Password" });    
            return false;
        }
        else
        {
            return true;
        }
    }
}

export default LoginForm;