import React from 'react';
import axios from 'axios';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      name: '',
      animals: [],
      pagination: [],
      next: '',
      prev: ''
    }
    this.searchHandler = this.searchHandler.bind(this);
    this.filterHandler = this.filterHandler.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
  }

  searchHandler(e) {
    if (e.target.value.length > 2) {
      this.getPets('?name=' + e.target.value);
    }
  }

  filterHandler() {
    let type = document.getElementById('type').value, 
      gender = document.getElementById('gender').value,
      typeExt = type !== '' ? 'type=' + type : null,
      genderExt = gender !== '' ?'gender=' + gender : null,
      ageExt = this.ageExtension(),
      sizeExt = this.sizeExtension(),
      extension = '';

    if (typeExt === null && genderExt === null && ageExt === null && sizeExt === null) {
      return console.log('return');
    }

    if (typeExt !== null) {
      extension += typeExt;
    }
    if (genderExt !== null) {
      if (typeExt !== null) {
        extension += '&'
      }
      extension += genderExt;
    }
    if (ageExt !== null) {
      if (typeExt !== null || genderExt !== null) {
        extension += '&'
      } 
      extension += ageExt;
    }
    if (sizeExt !== null) {
      if (typeExt !== null || genderExt !== null || ageExt !== null) {
        extension += '&'
      }
      extension += sizeExt;
    }
    this.getPets('?' + extension);
  }
  
  ageExtension() {
    let baby = document.getElementById('baby').checked,
      young = document.getElementById('young').checked,
      adult = document.getElementById('adult').checked,
      senior = document.getElementById('senior').checked,
      extension = '';

    if (!baby && !young && !adult && !senior) {
      return null
    }

    if (baby) {
      extension += 'baby';
    }

    if (young) {
      if (baby) {
        extension += ','
      }
      extension += 'young';
    }

    if (adult) {
      if (baby || young) {
        extension += ','
      } 
      extension += 'adult';
    }

    if (senior) {
      if (baby || young || adult) {
        extension += ','
      }
      extension += 'senior';
    }
    return 'size=' + extension;
  }

  sizeExtension() {
    let small = document.getElementById('small').checked,
      medium = document.getElementById('medium').checked,
      large = document.getElementById('large').checked,
      xLarge = document.getElementById('xlarge').checked,
      extension = '';

      if (!small && !medium && !large && !xLarge) {
        return null
      }

      if (small) {
        extension += 'small';
      }

      if (medium) {
        if (small) {
          extension += ','
        }
        extension += 'medium';
      }

      if (large) {
        if (small || medium) {
          extension += ','
        } 
        extension += 'large';
      }

      if (xLarge) {
        if (small || medium || large) {
          extension += ','
        }
        extension += 'xlarge';
      }
      return 'size=' + extension;
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
    client_id: 'SITGG4TS6lN6jsHWLK34FYv1kQGhQdLo9MItYAfDueWJJhmJNM',
    client_secret: 'Q4xsuuiTRhkVcIstacNfzs1jdcfseOog4ljvlehD'
    }
    }).then(function (response) {
          
      axios({
      // We can configure everything we need to about the http request in here
      method: 'GET',
      url: `https://api.petfinder.com/v2/animals${extension}`,
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

  componentDidMount() {
    this.getPets('')
  }

  render() {

    const { animals, pagination } = this.state;

    return (
      <div className="App">
        <Header 
          searchHandler={this.searchHandler}
          filterHandler={this.filterHandler}
        />
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