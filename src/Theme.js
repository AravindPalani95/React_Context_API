import React from 'react';
import Note_Paper from './resource/Note_Paper.png'

export const AppTheme = {
    dark: {
        themeName : "Dark UI",
        paper : { backgroundColor: "#282c34" },
        button : { backgroundColor : "#61dafb" },
        launcherText : { color: "#61dafb" },
        text : { color: "#61dafb" },
        themeText : { color: "#61dafb" },
        launcherSecondaryText : { color: "#038db3" },
        input : { backgroundColor : "#282c34", borderColor:"#61dafb", color: "#61dafb", boxShadow: "none"},
        signinBtn : { backgroundColor : "#61dafb", color: "#fff",boxShadow:"none"},
        launcherPath : Note_Paper,
        launcherSize : { height:40, marginTop:10, marginLeft:10 }, 
        signature : { fontSize: 15, color: "#61dafb", 
                      position: 'absolute', bottom: 0, left:"50%" ,transform:"translateX(-50%)" 
                    },
        loaderColor : { 'div::after': {background :"#61dafb"} }                        
    },
    light: {
        themeName : "Light UI",
        paper : { backgroundColor: "#fff" },
        button : { backgroundColor : "#61dafb" },
        launcherText : { color: "#61dafb" },
        text : { color: "#038db3" },
        themeText : { color: "#038db3" },
        launcherSecondaryText : { color: "#038db3" },
        input : { backgroundColor : "#fff", borderColor:"#038db3", color: "#038db3", boxShadow:"none"},
        signinBtn : { backgroundColor : "#038db3", color: "#fff",boxShadow:"none"},
        launcherPath : Note_Paper,
        launcherSize : { height:40, marginTop:10, marginLeft:10},
        signature : { fontSize: 15, color: "#038db3", textAlign: "center",
                       position: 'absolute', bottom: 0, left:"50%" ,transform:"translateX(-50%)" 
                    },
        loaderColor : {':after':{ background : "#038db3" }}                        
    }
};

export const AppContext = React.createContext();