import React, { Component } from 'react';
import Navbar from './navbar';
import data from '../assets/data/cards.json';
import Cards from './cards';

class Home extends Component{
    state={
        cards:data
    }
    render () {
        return (
           <div>
              <Navbar txtColor="txtColor1"/> 
              <h1 classname="txt-title"> Crypto Currencies</h1> 
              <Cards data ={this.state.cards}/>
           </div>
        )
    }
}

export default Home;