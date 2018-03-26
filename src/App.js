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
  FlatList
} from 'react-native';
import ArtistList from './components/ArtistList';

type Props = {};
export default class App extends Component{
  render() {
    const artist = {
      img : 'https://static.platzi.com/media/files/bowie_a927fdf3-b321-4a5c-99ca-239cc86c57bc.png',
      name : 'David Bowie Sensei',
      likes : 200,
      comments : 140
    }
    const artists = Array(30).fill(artist);
    return (
      <View style={styles.container}>
        <ArtistList  artists={artists} artist={artist}/>
      </View>
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
