import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Expo from 'expo';
import Spinner from 'react-native-loading-spinner-overlay';

import { getRandomContacts } from './api/uinames';
import HomeScreen from './Router';
import ErrorPage from './screens/Error';
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
        console.log(JSON.stringify(error, null, 2))
        this.setState({
          errorMsg: error,
          isLoading: false
        })
      });
  }

  onUserRefreshRequest() {
    this.setState({
      randomKey: Math.floor((Math.random() * 1000) + 1)
    })
  }

  render() {
    const { isLoading, contacts=[], errorMsg } = this.state;
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

    if(errorMsg) {
      return (
        <ErrorPage
          errorCode='Error'
          errorMsg={JSON.stringify(errorMsg, null, 2)}
          onRefreshRequest={ this.onUserRefreshRequest.bind(this) }
        />
      );
    }

    return <HomeScreen  style={styles.mainContainer} screenProps={contacts} />;
  }
}
