import React from 'react';
import { AppRegistry, Image, StatusBar } from 'react-native';
import { Container, Content, Text, List, ListItem } from 'native-base';
import styles from '../styles/styles';

const routes = [
  {
    screen: 'Home',
    title: 'All Contacts'
  },
  {
    screen: 'Profile',
    title: 'Random Contact'
  }
];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container style={styles.sideBar}>
        <Content>
          <Image source={require('../img/sunrise.png')} style={styles.sideBarLogo}/>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data.screen)}>
                  <Text style={styles.sideBarItem}>{data.title}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
