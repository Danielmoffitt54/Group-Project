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
        const { searchHandler, filterHandler } = this.props;

        return(
            <header className='Header' id='header'>
                <div className='Header-main'>
                    <h1 className='Header-logo'>AdoptMe</h1>
                    <div className='Header-nav'>
                        <button 
                            className='Header-navBtn' 
                            onClick={this.renderMenu}
                        >
                            Menu
                        </button>
                    </div>
                </div>
                <ul 
                    className='Header-menu' 
                    style={{display: showMenu ? 'block': 'none'}}
                >
                    <li className='Header-menuItem'>
                        <form className='Header-searchForm'>
                            <input 
                                className='Header-searchName' 
                                placeholder='Search by name'
                                onChange={searchHandler}
                            />
                        </form>
                    </li>
                    <li className='Header-menuItem'>
                        <form 
                            className='Header-filterForm'
                            onChange={filterHandler}
                        >
                            <label className='Header-filterRow'>Filter (Limit 2 Categories):</label>
                            <div className='Header-filterRow'>
                                <label className='Header-filterLabel'>
                                    Type:
                                    <select 
                                        id='type' 
                                        className='Header-filterSelect'
                                    >
                                        <option value=''>Select</option>
                                        <option value='dog'>Dog</option>
                                        <option value='cat'>Cat</option>
                                        <option value='rabbit'>Rabbit</option>
                                        <option value='small-furry'>Small and Furry</option>
                                        <option value='horse'>Horse</option>
                                        <option value='bird'>Bird</option>
                                        <option value='scales-fins-other'>Scales, Fins and Other</option>
                                        <option value='barnyard'>Barnyard</option>
                                    </select>
                                </label>
                                <label className='Header-filterLabel'>
                                    Gender:
                                    <select 
                                        id='gender' 
                                        className='Header-filterSelect'
                                    >
                                        <option value=''>Select</option>
                                        <option value='male'>Male</option>
                                        <option value='female'>Female</option>
                                    </select>
                                </label>
                            </div>
                            <div className='Header-filterRow'>
                                <label className='Header-filterLabel'>
                                    Age:
                                    <div className='Header-filterCheckbox'>
                                        <label>
                                            <input id='baby' type='checkbox' value='baby' />
                                            Baby
                                        </label>
                                        <label>
                                            <input id='young' type='checkbox' value='young' />
                                            Young
                                        </label>
                                        <label>
                                            <input id='adult' type='checkbox' value='adult' />
                                            Adult
                                        </label>
                                        <label>
                                            <input id='senior' type='checkbox' value='senior' />
                                            Senior
                                        </label>
                                    </div>
                                </label>
                                <label className='Header-filterLabel'>
                                    Size:
                                    <div 
                                        id='size' 
                                        className='Header-filterCheckbox'
                                    >
                                        <label>
                                            <input id='small' type='checkbox' value='small' />
                                            Small
                                        </label>
                                        <label>
                                            <input id='medium' type='checkbox' value='medium' />
                                            Medium
                                        </label>
                                        <label>
                                            <input id='large' type='checkbox' value='large' />
                                            Large
                                        </label>
                                        <label>
                                            <input id='xlarge' type='checkbox' value='xlarge' />
                                            Extra Large
                                        </label>
                                    </div>
                                </label>
                            </div>
                        </form>
                    </li>
                    <li className='Header-menuItem'>Powered by <a href='https://www.petfinder.com/developers/' target='_blank' rel='noopener noreferrer'>Petfinder</a></li>
                    <li className='Header-menuItem'>Created by: Scott Hurt, Jacob Richardson, and Daniel Moffitt</li>
                </ul>
            </header>
        );
    }
}