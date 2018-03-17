/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, styles.red]}></View>
        <View style={[styles.box, styles.green]}></View>
        <View style={[styles.box, styles.blue]}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: '#F5FCFF'
  },
  box: {
    width: 150,
    height:200,
    backgroundColor: 'black'
  },
  red: {
    //alignSelf: 'flex-end',
    //flex: 1,
    backgroundColor: 'red'
  },
  green: {
    //alignSelf: 'flex-start',
    flex: 1,
    backgroundColor: 'green'
  },
  blue: {
    //flex: 1,
    backgroundColor: 'blue'
  }
});
