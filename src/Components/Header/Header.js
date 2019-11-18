import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        }
        this.renderMenu = this.renderMenu.bind(this);
    }

    renderMenu() {
        const { showMenu } = this.state;
        this.setState({
            showMenu: !showMenu
        });
    }

    render() {
        const { showMenu } = this.state;

        return(
            <header className='Header'>
                <div className='Header-main'>
                    <h1 className='Header-logo'>AdoptMe</h1>
                    <div className='Header-nav'>
                        <button className='Header-navBtn' onClick={this.renderMenu}>Menu</button>
                    </div>
                </div>
                <form className='Header-searchBar' style={{display: showMenu ? 'flex': 'none'}}>
                    <input className='Header-searchText' placeholder='Search here'></input>
                    <button className='Header-searchBtn'>Search</button>
                </form>
                <ul className='Header-menu' style={{display: showMenu ? 'block': 'none'}}>
                    <li className='Header-menuItem'><a href='#'>Favorited</a></li> {/* Save an animal by id to save viewed */}
                    <li className='Header-menuItem'>Powered by <a href='https://www.petfinder.com/developers/' target='_blank'>Petfinder</a></li>
                </ul>
            </header>
        );
    }
}