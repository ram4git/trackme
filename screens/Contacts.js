import React from 'react';
import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { getRandomContacts } from '../api/uinames';
import { Container, List, ListItem, Thumbnail, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem, Spinner } from 'native-base';
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

  renderContacts() {
    const { isLoading, contacts=[] } = this.state;
    if(isLoading) {
      return <Spinner />;
    }
    const contactsList = []
    contacts.forEach( contact => {
      const { name, surname, phone, photo } = contact;
      contactsList.push(
        <ListItem avatar key={phone}>
          <Left>
            <Thumbnail
            source={{ uri: `${photo}`}} />
          </Left>
          <Body>
            <Text>{`${name} ${surname}`}</Text>
            <Text note>{phone}</Text>
          </Body>
        </ListItem>
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
      <Container>
        { this.renderHeader() }
        <Content padder>
        { this.renderContacts() }
        <Button full rounded primary
          style={{ marginTop: 10 }}
          onPress={() => this.props.navigation.navigate('Profile')}>
          <Text>Profile Page</Text>
        </Button>
        </Content>
      </Container>
    );
  }
}
