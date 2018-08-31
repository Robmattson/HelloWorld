// Require our dependencies
import React, { Component } from 'react';
import ReactNative from 'react-native';

const {View} = ReactNative;

export default class RootComponent extends Component {

  // Overriding the render method from Component
  render(){
      return (
        <View>
        <Text>Hello World!</Text>
        </View>
      );
  }
}
