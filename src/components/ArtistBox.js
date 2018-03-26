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

type Props = {};
export default class ArtistBox extends Component<Props> {
  render() {
    const { img, name, likes, comments } = this.props.artist;
    return (
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
    );
  }
}

const styles = StyleSheet.create({
  artistBox : {
    margin: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: .8,
    shadowOffset: {
      height: 2,
      width: -2
    },
    elevation: 2
  },
  images: {
    width:150,
    height: 150
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
