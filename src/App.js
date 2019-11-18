import React from 'react';
import axios from 'axios';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

class App extends React.Component {

  getAdoptablePets = () => {

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
          url: 'https://api.petfinder.com/v2/animals?type=dog&page=2',
          headers: { Authorization: `Bearer ${response.data.access_token}` }
          }).then(function (response) {
            console.log(response);
          }).catch(function (error) {
              console.log(error);
          });
          
      }).catch(function (error) {
          console.log(error);
      })
  }


  render() {

    this.getAdoptablePets();
    return (

      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
