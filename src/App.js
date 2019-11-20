import React from 'react';
import Header from './Components/Header/Header';
import Animals from './Components/Animals/Animals';
import Footer from './Components/Footer/Footer';
import '../src/Components/Animals/Animals.css';

class App extends React.Component {

  render() {

    return (

      <div className="App">
        <Header />
        <Animals />
        <Footer />
      </div>
    );
  }
}

export default App;
