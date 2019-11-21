import React from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }


  render() {

    return (

      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;