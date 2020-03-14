import React from 'react'
import '../styles/Launcher.css'

class Launcher extends React.Component
{
    render()
    {
        return(
            <div>
                <img src={this.props.theme.launcherPath} style={this.props.theme.launcherSize} alt="Paper Work" className="launcherImg"/>
                <span style={this.props.theme.launcherText} className="launcherFirstText">Paper</span>
                <span style={this.props.theme.launcherSecondaryText} className="launcherSecondText">Work</span>
            </div>
        );
    }
}

export default Launcher;