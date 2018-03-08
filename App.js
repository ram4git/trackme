import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Expo from 'expo';
import Spinner from 'react-native-loading-spinner-overlay';

import { getRandomContacts } from './api/uinames';
import HomeScreen from './Router';
import styles from './styles/styles';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    getRandomContacts(10)
      .then( response => {
        this.setState({
          contacts: response,
          isLoading: false
        });
      })
      .catch(error => {
        this.setState({
          errorMsg: error,
          isLoading: false
        })
      });
  }

  render() {
    const { isLoading, contacts=[] } = this.state;
    if(isLoading) {
      return (
        <View style={styles.spinner}>
          <Spinner visible={this.state.isLoading}
            size='large'
            animation='fade'
            color='#00b894'/>
        </View>
      );
    }
    return <HomeScreen  style={styles.mainContainer} screenProps={this.state.contacts} />;
  }
}
