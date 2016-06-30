/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
 AppRegistry,
 StyleSheet,
 Text,
 View,
 TouchableHighlight,
 TextInput,
 ListView
} from 'react-native';

var firebase = require("firebase");

 class TODO extends Component {
  constructor(props){
    super(props);


    var fire = new Firebase('https://highrisept.firebaseio.com');

    fire.set({
      username: 'j',
      email: 'plleh'
    });
  }


}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('TODO', () => TODO);
