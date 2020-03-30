import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Background from './Assets/Background.png';
import Header from './Components/Header';
import InputBar from './Components/InputBar';
import { Button } from './Components/Button';
import { BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Select from 'react-select';
import history from './history';

export default class RecordJourneyPage extends Component {
    render() {
return (
      
     <View style={styles.container}>

        <Header title={"RECORD A JOURNEY"}/>

 <View style={{marginTop:350, alignItems: 'center'}}>
         <div className="container">
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <Select options={ vehicles } />
      </div>
      <div className="col-md-4"></div>
    </div>
  </div>
    </View>

   <View style={{marginTop:2200, alignItems: 'center'}}>
        <Button  type='Button'
        buttonStyle='btn--primary--solid'
        buttonSize='btn--small'
        onClick={() => history.push('/')}
        >Back</Button>
        </View>

     </View>
     
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: "url(" + Background + ")",
  },

});

const vehicles = [
  { label: "Car", value: 1 },
  { label: "Taxi", value: 2 },
  { label: "Bus", value: 3 },
  { label: "Metro", value: 4 },
  { label: "Train", value: 5 },
  { label: "Bicycle", value: 6 },
  { label: "Walking", value: 7 },
];