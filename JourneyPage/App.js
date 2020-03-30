import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Background from './Assets/Background.png';
import Header from './Components/Header';
import InputBar from './Components/InputBar';
import JourneyStartPage from './JourneyStartPage.js';
import EnterJourneyPage from './EnterJourneyPage.js';
import { Button } from './Components/Button';
import { BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import history from './history';
import Select from 'react-select';
import Routes from './Routes'



export default class App extends Component {
  constructor(){
    super();
  }
    render() {
return (
      <Router>

     <View style={styles.container}>



     <Routes />
   

     </View>

  

     
     </Router>
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: "url(" + Background + ")",
  },
}


);


