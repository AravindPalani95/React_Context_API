import React from 'react'
import { AppContext } from '../Theme';
import Switch from '../components/Switch'
import Launcher from "../components/Launcher";
import Loader from './Loader';
import LoginForm from '../components/LoginForm'


class Login extends React.Component
{
    constructor(props,context)
    {
        super(props,context);
        this.state = { showLoader: false, showForm: true };   
    }

    render()
    {
        return(
            <AppContext.Consumer>
                {
                    (context) =>
                    (
                        <div style={context.theme.paper} className="paper-size">
                        <div id="header">
                            <div className="header-launcher">
                                <Launcher theme={context.theme} />
                            </div>
                            <div className="header-switch">
                                <Switch toggle={context.toggleTheme} theme = {context.theme}/>
                            </div>
                        </div>        
                        <Loader showLoader = {this.state.showLoader}/>
                        <LoginForm theme= {context.theme} showForm = {this.state.showForm} toggleLoader={this.toggleLoader}/>
                        <p style={context.theme.signature}>Copyrights - Aravind Palani</p>
                        </div>
                    )

                    
                }
            
            </AppContext.Consumer>
        );
    }

    toggleLoader = (flag)=>{
        this.setState({showLoader : flag,showForm: !flag});
    }
    
}
export default Login;
