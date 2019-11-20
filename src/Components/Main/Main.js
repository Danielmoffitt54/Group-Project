import React, { Component } from 'react';
import axios from 'axios';
import './Main.css';
import List from '../List/List';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animals: [ 'animal0', 'animal1', 'animal2', 'animal3', 'animal4', 'animal5', 'animal6', 'animal7', 'animal8', 'animal9'],
            page: 0,
        }
    }


    getAdoptablePets = (extension) => {

        const self = this;
  
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
            url: `https://api.petfinder.com${extension}`,
            headers: { Authorization: `Bearer ${response.data.access_token}` }
            }).then(function (response) {
                console.log(response);
                self.setState({
                    animals: response.data.animals,
                    page: response.data.pagination.current_page
                });
            }).catch(function (error) {
                console.log(error);
            });
            
        }).catch(function (error) {
            console.log(error);
        })
    }

    // componentDidMount() {
    //     this.getAdoptablePets('/v2/animals');
    // }


    render() {
        const { page, animals } = this.state;

        return(
            <main className='Main'>
                {/* <Filters /> */}
                <List array={animals}/>
                <div className='Main-pages'>
                    <div className='Main-pageNav'>
                        <button className='Main-navBtn'>Prev</button>
                        <div className='Main-navMid'>{page}</div>
                        <button className='Main-navBtn'>Next</button>
                    </div>
                </div>
            </main>
        );
    }
}