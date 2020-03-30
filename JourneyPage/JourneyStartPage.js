import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Background from './Assets/Background.png';
import Header from './Components/Header';
import InputBar from './Components/InputBar';
import { Button } from './Components/Button';
import { BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import EnterJourneyPage from './EnterJourneyPage.js';
import RecordJourneyPage from './RecordJourneyPage.js';
import history from './history';

export default class JourneyStartPage extends Component {
    render() {
return (
    <Router>
     <View style={styles.container}>

        <Header title={"JOURNEY TRACKER"}/>

        <InputBar />

        <View style={{marginTop:500, alignItems: 'center'}}>
        <Button  type='Button'
        buttonStyle='btn--primary--solid'
        buttonSize='btn--medium'
        onClick={() => history.push('/RecordJourneyPage')}
        >Record A Journey!</Button>
        </View>

        <View style={{marginTop:500, alignItems: 'center'}}>
        <Button type='Button'
        buttonStyle='btn--primary--solid'
        buttonSize='btn--medium'
        onClick={() => history.push('/EnterJourneyPage')}
        >Enter A Journey!</Button>
        </View>

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

});