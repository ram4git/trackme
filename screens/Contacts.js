import React from 'react';
import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { getRandomContacts } from '../api/uinames';
import styles from '../styles/styles';
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
        <Card key={phone}>
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
