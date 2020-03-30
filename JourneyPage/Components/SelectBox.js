import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class SelectBox extends React.Component {
constructor(props) {
    super(props);
    
    this.state = { value: 'select'};
  }
  onChange(e) {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    return (
      <div className="form-group">
        <label htmlFor="select1" >Select Vehicle</label>
        <select value={this.state.value} onChange={this.onChange.bind(this)} className="form-control">
          <option value="First">Car</option>
          <option value="Second">Bus</option>
          <option value="Third">Bicycle</option>
          <option value="Third">Walking</option>
        </select>
      </div>
    )
  }
}