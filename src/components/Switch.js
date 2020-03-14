import React from 'react'
import '../styles/Switch.css'

class Switch extends React.Component
{
    constructor()
    {
        super();
        this.state = { checked : true };
    }
    render()
    {
        return(
            <div>
            <span id="themeName" style={this.props.theme.themeText}>{this.props.theme.themeName}</span>
            <label className="switch">
                <input type="checkbox"  onChange={this.handleChange} checked={this.state.checked} />
                <span className="slider round"></span>
            </label>
            </div>
        );
    }

    handleChange = (event) =>
    {
        this.props.toggle();
        this.setState({checked : event.target.checked});
    }
}
export default Switch;