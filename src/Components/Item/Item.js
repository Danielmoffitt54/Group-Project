import React, { Component } from 'react';
import './Item.css';

export default class Item extends Component {
    render() {
        const { animal, id } = this.props;
        return(
            <div className='Item' key={id}>
                <h3 className='Item-header'>{animal}</h3>
                <h4 className='Item-subHeader'>Breed</h4>
                <h4 className='Item-subHeader'>Age</h4>
                <div className='Item-footer'>
                    <h4>Location</h4>
                    <button className='Item-footerBtn'>Learn more</button>
                </div>
            </div>
        );
    }
}