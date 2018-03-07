import React from 'react';
import { StatusBar, TouchableHighlight, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { getRandomContacts } from '../api/uinames';
import styles from '../styles/styles';
import Spinner from 'react-native-loading-spinner-overlay';

import { Container, List, ListItem, Toast, Thumbnail, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from 'native-base';
export default class Contacts extends React.Component {
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

  renderHeader() {
    return (
      <Header>
        <Left/>
        <Body>
          <Title>CONTACTS</Title>
        </Body>
        <Right />
      </Header>
    );
  }

  onCardSelect(cardInfo) {
    this.props.navigation.navigate('Profile', {info: cardInfo});
  }

  renderContacts() {
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
    const contactsList = []
    contacts.forEach( contact => {
      const { name, surname, phone, photo } = contact;
      contactsList.push(
        <Card key={phone} >
        <TouchableHighlight onPress={this.onCardSelect.bind(this, contact)}>
          <CardItem avatar style={styles.contactCard}>
            <Left style={styles.noMargin}>
              <Thumbnail
              source={{ uri: `${photo}`}} />
            </Left>
            <Body>
              <Text style={styles.contactName}>{`${name} ${surname}`}</Text>
              <Text style={styles.contactNumber}>{phone}</Text>
            </Body>
          </CardItem>
          </TouchableHighlight>
        </Card>
      );
    });
    return (
      <List>
        {contactsList}
      </List>
    );
  }


  render() {
    return (
      <Container style={styles.contactContainer}>
        { this.renderHeader() }
        <Content padder>
          { this.renderContacts() }
        </Content>
      </Container>
    );
  }
}
