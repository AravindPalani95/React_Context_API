import React from 'react';
import '../styles/Loader.css';

class Loader extends React.Component
{
    render()
    {
        if(this.props.showLoader)
            return(<div class="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>);
        else
            return(<div/>);

    }
}

export default Loader;