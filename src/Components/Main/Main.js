import React, { Component } from 'react';
import './Main.css';
import List from '../List/List';

export default class Main extends Component {
    render() {
        return(
            <main className='Main'>
                {/* <Filters /> */}
                <List />
                <div className='Main-pages'>
                    <div className='Main-pageNav'>
                        <button onClick={console.log('hi')} className='Main-navBtn'>Prev</button>
                        <div className='Main-navMid'>#</div>
                        <button onClick={console.log('hi')} className='Main-navBtn'>Next</button>
                    </div>
                </div>
            </main>
        );
    }
}