import React, { Component } from 'react';
import './Item.css';

export default class Item extends Component {

    capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    renderBackground() {
        const { animal } = this.props;
        const responseCheck = animal.photos.length !== 0;
        if (responseCheck) {
            return animal.photos[0].medium
        } else {
            return
        }
    }

    render() {
        const { animal, onClick } = this.props;

        return(
            <div className='Item' style={{background: `linear-gradient(to right, black, transparent) ,url(${this.renderBackground()})`}}>
                <h3 className='Item-header'>{animal.name}</h3>
                <h4 className='Item-subHeader'>{animal.age + ' ' + animal.species}</h4>
                <h4 className='Item-subHeader'>{this.capitalize(animal.status)}</h4>
                <div className='Item-footer'>
                    <h4>{animal.contact.address.city + ', ' + animal.contact.address.state}</h4>
                    <button className='Item-footerBtn' onClick={() => onClick( 'Pet', animal)}>Learn more</button>
                </div>
            </div>
        );
    }
}