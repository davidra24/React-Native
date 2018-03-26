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
  View,
  ScrollView
} from 'react-native';
import ArtistBox from './ArtistBox';

type Props = {};
export default class App extends Component<Props> {
  render() {
    const artist = {
      img : 'https://static.platzi.com/media/files/bowie_a927fdf3-b321-4a5c-99ca-239cc86c57bc.png',
      name : 'David Bowie Sensei',
      likes : 200,
      comments : 140
    }
    return (
      <ScrollView style={styles.container}>
        {
          Array(20).fill(artist).map(artist => {
            return <ArtistBox artist = {artist}/>
          })
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50
  }
});
