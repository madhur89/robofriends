import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';


// const state = {
//   robots: robots,
//   Searchfield: ''
// }

class App extends Component {
  constructor (){
    super()
    this.state = {
      robots: [],
      Searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then (response=> {
          return response.json();
        })
        .then(users=>{
          this.setState({robots: users})
        })
  }




   onsearch = (event) => {
    this.setState({ Searchfield: event.target.value })
    }
  



    render() {
        const robofilter = this.state.robots.filter(robots => {
          return robots.name.toLowerCase().includes(this.state.Searchfield.toLowerCase())
        })
        if(this.state.robots.length === 0){
          return <h1> LOADING </h1>
        } else{ 
           return(
            <div className = 'tc'>
              <h1 className = 'f1'> Robofriends </h1>
              <SearchBox searchchange = {this.onsearch} />
              <Scroll>
                <CardList robots = {robofilter} />
              </Scroll>  
            </div>

          );
        } 
      }
    }


export default App;