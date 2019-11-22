import React, { Component } from 'react';
import './Main.css';
import List from '../List/List';
import Pet from '../Pet/Pet';

export default class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: 'List',
        pet: []
      }
      this.changeComponent = this.changeComponent.bind(this);
    }

    renderComponent() {
  
      const { component, pet } = this.state;
      const { animals } = this.props;
      
      if (component === 'Pet') {
        return <Pet array={pet} onClick={this.changeComponent} />
      } else {
        return <List array={animals} onClick={this.changeComponent} />
      }
    }
  
    changeComponent( clicked, array) {
  
      this.setState({
        component: clicked,
        pet: array
      });
      this.renderComponent();
    }

    render() {
        const { component } = this.state;
        const { pagination, nextPage, previousPage } = this.props;

        return (
                <main className='Main'>
                    {this.renderComponent()}
                    <div className='Main-pages' style={{display: component === 'List' ? 'flex' : 'none'}}>
                        <div className='Main-pageNav'>
                            <button className='Main-navBtn' onClick={previousPage}>Prev</button>
                            <div className='Main-navMid'>{pagination.current_page}</div>
                            <button className='Main-navBtn' onClick={nextPage}>Next</button>
                        </div>
                    </div>
                </main>
            );
    }
}