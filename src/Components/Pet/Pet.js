import React, { Component } from 'react'
import './Pet.css';

export default class Pet extends Component {

    renderText(value) {
        if (value !== null) {
            return <p className='Pet-Text'>{value}</p>
        } else {
            return;
        }
    }

    renderEnvironment(type, value) {
        
        if (value !== null) {
            return <p className='Pet-Text' >{value ? 'Good with ' + type : 'Bad with ' + type}</p>
        } else {
            return;
        }
    }

    renderHealth(type, value) {
        const { array } = this.props;
        let trueReturn = '';
        let falseReturn = '';

        if (value === null) {
            return;
        }

        switch (type) {
            case 1:
                if (array.gender === 'Male') {
                    return <p className='Pet-Text'>{value ? "I'm Neutered" : "I'm not Neutered"}</p>
                } else if (array.gender === 'Female') {
                    return <p className ='Pet-Text'>{value ? "I'm Spaded" : "I'm not Spaded"}</p>
                }
            case 2:
                trueReturn = "I'm house trained";
                falseReturn = "I'm not house trained";
                break;
            case 3:
                trueReturn = "I'm declawed";
                falseReturn = "I'm not declawed";
                break;
            case 4:
                trueReturn = "I require special needs";
                falseReturn = "I don't require special needs";
                break;
            case 5:
                trueReturn = "My shots are up to date";
                falseReturn = "My shots are not up to date";
                break;

        }
        return <p className='Pet-Text'>{value ? trueReturn : falseReturn}</p>
    }

    render(){
        const { array, onClick } = this.props;

        return(
            <div className='Pet'>
                <div className='Pet-header'>
                    <button 
                        className='Pet-headerBtn' 
                        onClick={() => onClick('List')}
                    >
                        Back
                    </button>
                    <button className='Pet-headerBtn'>Adopt</button>
                </div> 
                <h1 className='Pet-name'>{array.name + ' - ' + array.status}</h1>
                <img 
                    className = 'Pet-image' 
                    src={array.photos.length === 0 ? '' : array.photos[0].full}
                    alt={`Photo of ${array.name}`}
                ></img>
                <div className='Pet-aboutMe'>
                    <h1 className='Pet-title'>AboutMe:</h1>
                    {this.renderText(array.description)}
                    <div className='Pet-category'>
                        {this.renderText(array.size)}
                        {this.renderText(array.age + ' ' + array.gender)}
                        {this.renderText(array.coat)}
                        {this.renderText(array.colors.primary)}
                    </div>
                    <div className='Pet-category'>
                        <h2 className = 'Pet-title'>What am I like?</h2>
                        {this.renderEnvironment('Children', array.environment.children)}
                        {this.renderEnvironment('Dogs', array.environment.dogs)}
                        {this.renderEnvironment('Cats', array.environment.cats)}
                    </div>
                    <div className='Pet-category'>
                        <h2 className = 'Pet-title'>What's my health history?</h2>
                        {this.renderHealth(1, array.attributes.spaded_neutered)}
                        {this.renderHealth(2, array.attributes.house_trained)}
                        {this.renderHealth(3, array.attributes.de_clawed)}
                        {this.renderHealth(4, array.attributes.special_needs)}
                        {this.renderHealth(5, array.attributes.shots_current)}
                    </div>
                    <div className='Pet-category'>
                        <h2 className = 'Pet-title' >Where am I?</h2>
                        {this.renderText(array.contact.email)}
                        {this.renderText(array.contact.phone)}
                        {this.renderText(array.contact.address1)}
                    </div>
                </div>
            </div>
        );
    }
}