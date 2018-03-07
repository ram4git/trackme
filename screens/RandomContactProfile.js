import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import { DrawerNavigator } from 'react-navigation';
import { View } from 'react-native';
import styles from '../styles/styles';
import ContactProfile from './ContactProfile';
import { getRandomContacts } from '../api/uinames';
import { Header, Left, Body, Title, Right, Button, Text, Icon } from "native-base";


export default class RandomContactProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    getRandomContacts(1)
       .then( response => {
         this.setState({
           info: response,
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

    return <ContactProfile info={this.state.info} navigation={this.props.navigation} />
  }

}
