import React from 'react'
import { AppContext, AppTheme } from './Theme'

class ThemeProvider extends React.Component
{
    constructor()
    {
        super();
        this.state = { theme : AppTheme.dark };
        console.info(this.state.theme);
        console.info(this.state.theme.paper);
    }

    render()
    {
        return (
            <AppContext.Provider value={{theme:this.state.theme,toggleTheme : this.toggleTheme}}>
                {this.props.children}
            </AppContext.Provider>
        );
    }

    toggleTheme = (themeOpt) =>
    {
        console.info(this.state.theme === AppTheme.dark);
        console.info(this.state.theme.themeName)
        if(this.state.theme === AppTheme.dark)
        {
            this.setState({theme : AppTheme.light});
        }
        else
        {
            this.setState({theme : AppTheme.dark});
        }
    }
}

export default ThemeProvider;