import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return(
            <footer className='Footer'>
                <h1 className='Footer-logo'>
                    <a className='Footer-logoLink' href='#header'>AdoptMe</a>
                </h1> 
                {/* ^ Link to return to top */}
            </footer>
        );
    }
}