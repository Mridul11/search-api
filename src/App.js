import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ItemList from './components/ItemList';
import ItemDetails from './components/ItemDetails';

const BASE_URL = 'https://api.github.com/search/repositories?q='

class App extends Component {
  
  constructor(){
      super()
        
      this.state={
          selectedVal : null,
          val:[]
      }

        this.fetchData('');
    }

    fetchData(term){
        fetch(`${BASE_URL}${term}`)
          .then(resp => resp.json())
          .then(val => val.items? this.setState({ val: val.items , selectedVal:val.items[0]}) : null)
    }

  render() {
    console.log(this.state.val, this.state.selectedVal)
    return (
      <div className="App">
          <SearchBar onSearchTermChange={(term) => this.fetchData(term)}/>
          <ItemList 
              arrval={this.state.val} 
              onVideoSelect = {selectedVal => this.setState({ selectedVal })} 
            />
          <ItemDetails newval={this.state.selectedVal}/>
      </div>
    );
  }
}

export default App;
