import React, { Component } from 'react'
import './Pet.css';

export default class Pet extends Component {

    renderHeader(value) {
        if (value !== null) {
            return <h2>{value}</h2>
        } else {
            return;
        }
    }

    renderText(value) {
        if (value !== null) {
            return <p>{value}</p>
        } else {
            return;
        }
    }

    renderEnvironment(type, value) {
        
        if (value !== null) {
            return <p>{value ? 'Good with ' + type : 'Bad with ' + type}</p>
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
                    return <p>{value ? "I'm Neutered" : "I'm not Neutered"}</p>
                } else if (array.gender === 'Female') {
                    return <p>{value ? "I'm Spaded" : "I'm not Spaded"}</p>
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
        return <p>{value ? trueReturn : falseReturn}</p>
    }

    render(){
        const { array, onClick } = this.props;

        return(
            <div className='Pet'>
                <button className='Pet-returnBtn' onClick={() => onClick('List')}>Back</button>
                <div className='Pet-header'>
                    <h1 className='Pet-name'>{array.name}</h1>
                    <button className='Pet-headerButton'>Adopt</button>
                </div>
                <img className = 'Pet-image' src={array.photos.length === 0 ? '' : array.photos[0].medium}></img>
                <div className='Pet-aboutMe'>
                    <h1>AboutMe</h1>
                    {this.renderText(array.description)}
                    <div className='Pet-Characteristics'>
                        <h1>{array.animal}</h1>
                        {this.renderText(array.size)}
                        {this.renderText(array.age + ' / ' + array.gender)}
                        {this.renderText(array.coat)}
                        {this.renderText(array.colors.primary)}
                    </div>
                    <div className='Pet-behavior'>
                        <h1>Environment</h1>
                        {this.renderEnvironment('Children', array.environment.children)}
                        {this.renderEnvironment('Dogs', array.environment.dogs)}
                        {this.renderEnvironment('Cats', array.environment.cats)}
                    </div>
                    <div className='Pet-health'>
                        <h1>Attributes</h1>
                        {this.renderHealth(1, array.attributes.spaded_neutered)}
                        {this.renderHealth(2, array.attributes.house_trained)}
                        {this.renderHealth(3, array.attributes.de_clawed)}
                        {this.renderHealth(4, array.attributes.special_needs)}
                        {this.renderHealth(5, array.attributes.shots_current)}
                    </div>
                    <div className='Pet-contactMe'>
                        <h1>ContactMe</h1>
                        {this.renderText(array.contact.email)}
                        {this.renderText(array.contact.phone)}
                        {this.renderText(array.contact.address1)}
                    </div>
                </div>
            </div>
        );
    }
}