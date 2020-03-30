import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Background from './Assets/Background.png';
import Header from './Components/Header';
import InputBar from './Components/InputBar';
import { Button } from './Components/Button';
import { BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';

export default class JourneyStartPage extends Component {
    render() {
return (
    <Router>
     <View style={styles.container}>

        <Header title={"JOURNEY TRACKER"}/>

        <InputBar />

        <View style={{marginTop:500, alignItems: 'center'}}>
        <Button onClick={() => {console.log('suck my balls mate')}} type='Button'
        buttonStyle='btn--primary--solid'
        buttonSize='btn--medium'
        >Record A Journey!</Button>
        </View>

        <View style={{marginTop:500, alignItems: 'center'}}>
        <Button type='Button'
        buttonStyle='btn--primary--solid'
        buttonSize='btn--medium'
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

