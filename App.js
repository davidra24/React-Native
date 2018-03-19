/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
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
    const img = 'https://static.platzi.com/media/files/bowie_a927fdf3-b321-4a5c-99ca-239cc86c57bc.png';
    const name = 'David Bowie Sensei';
    const likes = 200;
    const comments = 140;
    return (
      <View style={styles.container}>
        <View style={styles.artistBox}>
          <Image style={styles.images} source={{uri:img}}/>
          <View style={styles.info}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.row}>
              <View style={styles.iconContainer}>
                <Icon name="ios-heart-outline" size={30} color="gray" />
                <Text style={styles.count}>{likes}</Text>
              </View>
              <View style={styles.iconContainer}>
                <Icon name="ios-chatbubbles-outline" size={30} color="gray" />
                <Text style={styles.count}>{comments}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50
  },
  images: {
    width:150,
    height: 150
  },
  artistBox:{
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  name:{
    fontSize: 20,
    marginVertical: 15
  },
  row:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30
  },
  iconContainer: {
    flex: 1,
    alignItems:'center'
  },
  count:{
    color: 'gray'
  }
});
