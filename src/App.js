import React from 'react';
import axios from 'axios';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: [],
      pagination: [],
      next: '',
      prev: ''
    }
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
  }

  getPets = (extension) => {

    const self = this;
    console.log(extension);

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

        if (response.data.animals) {
          self.setState({
            animals: response.data.animals,
            pagination: response.data.pagination
          });
        }

        if (response.data.pagination._links.previous) {
          self.setState({
            prev: response.data.pagination._links.previous.href,
          });
        }

        if (response.data.pagination._links.next) {
          self.setState({
            next: response.data.pagination._links.next.href
          });
        }

      }).catch(function (error) {
        console.log(error);
      });
              
    }).catch(function (error) {
      console.log(error);
    })
  }

  componentDidMount() {
    this.getPets('/v2/animals');
  }

  nextPage() {

    const { pagination, next } = this.state;

    if (pagination._links.next) {
      this.getPets(next);
    }
  }

  previousPage() {

    const { pagination, prev } = this.state;

    if (pagination._links.previous) {
      this.getPets(prev);
    }
  }

  render() {

    const { animals, pagination } = this.state;

    return (
      <div className="App">
        <Header />
        <Main 
          animals={animals} 
          pagination={pagination} 
          nextPage={this.nextPage}
          previousPage={this.previousPage}
        />
        <Footer />
      </div>
    );
  }
}

export default App;