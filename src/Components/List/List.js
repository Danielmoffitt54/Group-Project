import React, { Component } from 'react';
import './List.css';
import Item from '../Item/Item';

export default class List extends Component {
    render() {
        const { array } = this.props;
        return(
            <div className='List'>
                {array.map(function(animal, i){
                    return (
                        <div key={i}>
                            <Item animal={animal} />
                        </div>
                        );

                    })
                }
            </div>
        );
    }
}