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
  FlatList
} from 'react-native';
import ArtistBox from './ArtistBox';

type Props = {};
export default class ArtistList extends Component<Props> {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <FlatList
                data={this.props.artists}
                renderItem={({item}) => <ArtistBox artist = {this.props.artist} />}
            />
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
