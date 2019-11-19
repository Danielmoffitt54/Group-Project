import React, { Component } from 'react';
import axios from 'axios';
import './Main.css';
import List from '../List/List';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animals: [],
            currentPage: 1,
            totalPages: ''
        }
        this.incrementPage = this.incrementPage.bind(this);
        this.decrementPage = this.decrementPage.bind(this);
    }

    incrementPage() {
        const { currentPage, totalPages } = this.state;
        const lastPage = currentPage === totalPages;
        if (!lastPage) {
            this.setState({
                currentPage: currentPage + 1
            })
            return this.getAdoptablePets()
        }
    }

    decrementPage() {
        const { currentPage } = this.state;
        const firstPage = currentPage === 1;
        if (!firstPage) {
            this.setState({
                currentPage: currentPage - 1
            })
            return this.getAdoptablePets()
        }
    }

    getAdoptablePets = () => {

        const self = this;
        const { currentPage } = this.state;

      axios({
        // We can configure everything we need to about the http request in here
        method: 'POST',
        url: 'https://api.petfinder.com/v2/oauth2/token',
        data: {
          grant_type: 'client_credentials',
          client_id: 'uTs1oyTZOCH08ubX11sIAPPDN9XFYRoJ0hYlML5fofyMt0RuiT',
          client_secret: '0ijkQV9UXKMTja7iOScbNXsG5fxfU8GPWEDaLYgj'
        }
        }).then(function (response) {
          
          axios({
            // We can configure everything we need to about the http request in here
            method: 'GET',
            url: `https://api.petfinder.com/v2/animals?page=${currentPage}`,
            headers: { Authorization: `Bearer ${response.data.access_token}` }
            }).then(function (response) {
                console.log(response);
                self.setState({
                    animals: response.data.animals,
                    totalPages: response.data.pagination.total_pages
                });
            }).catch(function (error) {
                console.log(error);
            });
            
        }).catch(function (error) {
            console.log(error);
        })
    }

    componentDidMount() {
        this.getAdoptablePets();
    }

    render() {
        const { currentPage, animals } = this.state;

        return(
            <main className='Main'>
                <List array={animals}/>
                <div className='Main-pages'>
                    <div className='Main-pageNav'>
                        <button className='Main-navBtn' onClick={this.decrementPage}>Prev</button>
                        <div className='Main-navMid'>{currentPage}</div>
                        <button className='Main-navBtn' onClick={this.incrementPage}>Next</button>
                    </div>
                </div>
            </main>
        );
    }
}