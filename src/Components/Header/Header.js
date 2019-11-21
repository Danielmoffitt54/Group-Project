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
                    <input className='Header-searchBox' placeholder='Search here'></input>
                    <button className='Header-searchBtn'>Search</button>
                </form>
                {/* <select className="category-select" name="categories" onChange={this.handleChange}>
                    {data.map(info => (
                        <option value={info.role}>{info.role}</option>
                    ))}
                </select>  */}
                <ul className='Header-menu' style={{display: showMenu ? 'block': 'none'}}>
                    <li>
                        <form>
                            <label>
                                Types:
                                <select className='Header-select'>
                                    <option value=''>Select</option>
                                    <option value='Dog'>Dog</option>
                                    <option value='Cat'>Cat</option>
                                    <option value='Rabbit'>Rabbit</option>
                                    <option value='Small and Furry'>Small and Furry</option>
                                    <option value='Horse'>Horse</option>
                                    <option value='Bird'>Bird</option>
                                    <option value='Scales, Fins and Other'>Scales, Fins and Other</option>
                                    <option value= 'Barnyard'>Barnyard</option>
                                </select>
                            </label>
                            <label>
                                Coats:
                                <select className='Header-select'>
                                    <option value= 'Select'> Select</option>
                                    <option value='Hairless'>Hairless</option>
                                    <option value= 'Short'>Short</option>
                                    <option value= 'Medium'>Medium</option>
                                    <option value= 'Long'>Long</option>
                                    <option value='Wire'>Wire</option>
                                    <option value='Curly'>Curly</option>
                                </select>
                            </label>
                            <label>
                                Color:
                                <select className='Header-select'>
                                    <option value='Select'>Select</option>
                                    <option value='Apricot/Beige'>Apricot/Beige</option>
                                    <option value='BiColor'>Bi Color</option>
                                    <option value='Black'>Black</option>
                                    <option value='Brindle'>Brindle</option>
                                    <option value='Brown/Chocolate'>Brown/Chocolate</option>
                                    <option value='Golden'>Golden</option>
                                    <option value='Gray/ Blue/ Silver'>Gray/ Blue/ Silver</option>
                                    <option value='Harlequin'>Harlequin</option>
                                    <option value='Merle (Blue)'>Merle (Blue)</option>
                                    <option value='Merle (Red)'>Merle (Red)</option>
                                    <option value='Red/ Chestnut/ Orange'>Red/ Chestnut/ Orange</option>
                                    <option value='Sable'>Sable</option>
                                    <option value='Tricolor (Brown, Black, and White)'>Tricolor (Brown, Black, and White)</option>
                                    <option value='White/Cream'>White/Cream</option>
                                    <option value='Yellow/ Tan/ Blond/ Fawn'>Yellow/ Tan/ Blond/ Fawn</option>
                                </select>
                            </label>
                            <label>
                                Gender:
                                <select className='Header-select'>
                                    <option value='Select'>Select</option>
                                    <option value='Male'>Male</option>
                                    <option value='Female'>Female</option>
                                </select>
                            </label>
                             <button className='Submit'>Submit</button>
                        </form>
                    </li>
                    <li className='Header-menuItem'>Powered by <a href='https://www.petfinder.com/developers/' target='_blank'>Petfinder</a></li>
                </ul>
            </header>
        );
    }
}