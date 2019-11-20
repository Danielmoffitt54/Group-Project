import React, { Component } from 'react'
import './Pet.css';

export default class Pet extends Component {
    render(){
        return(
            <div className='Pet'>
                <div className='Pet-header'>
                    <h1 className='Pet-name'>Name</h1>
                    <button className='Pet-headerButton'>Heart</button>
                    <button className='Pet-headerButton'>Adopt</button>
                </div>
                <div className = 'Pet-image'>
                    <p><a href='#'>Page for website</a></p>
                    {/*This is where more pictures of the animal is gonna go*/}
                </div>
                <div className='Pet-aboutMe'>
                    <h1>About Me</h1>
                    <p>Description</p>
                    <div className='Pet-Characteristics'>
                        <h1>animal</h1>
                        <p>size</p>
                        <p>age / gender</p>
                        <p>coat</p>
                        <p>colors: Primary / Secondary</p>
                    </div>
                    <div className='Pet-behavior'>
                        <h1>enviroment - boolean</h1>
                        <p>children</p>
                        <p>dogs</p>
                        <p>cats</p>
                    </div>
                    <div className='Pet-health'>
                        <h1>attributes</h1>
                        <p>Spade_Neutered</p>
                        <p>House_Trained</p>
                        <p>De-Clawed</p>
                        <p>Special_Needs</p>
                        <p>Shots_Current</p>
                    </div>
                    <div className='Pet-contactMe'>
                        <h1>contact</h1>
                        <p>E-Mail</p>
                        <p>Phone</p>
                        <p>Address</p>
                    </div>
                </div>
            </div>
        );
    }
}