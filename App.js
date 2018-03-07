import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Expo from 'expo';
import HomeScreen from './Router';
import styles from './styles/styles';

export default class App extends Component {

  render() {
    return <HomeScreen  style={styles.mainContainer}/>;
  }
}


