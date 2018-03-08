import React from 'react';
import { StatusBar, TouchableHighlight, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import styles from '../styles/styles';

import {
  Container,
  List,
  ListItem,
  Toast,
  Thumbnail,
  Header,
  Title,
  Left,
  Right,
  Body,
  Content,
  Text,
  Card,
  CardItem
} from 'native-base';

export default class Contacts extends React.Component {

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

    const { screenProps:contacts } = this.props;

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
