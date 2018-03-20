import React from 'react';
import { AppRegistry, Image, StatusBar, ImageBackground } from 'react-native';
import { Container, Content, Text, List, ListItem, Card, CardItem, Body  } from 'native-base';
import { DrawerNavigator } from 'react-navigation';

import styles from '../styles/styles';

const routes = [
  {
    screen: 'Home',
    title: 'Home'
  },
  {
    screen: 'PendingRequests',
    title: 'My Requests'
  },
  {
    screen: 'PendingRequests',
    title: 'Search'
  },
  {
    screen: 'About',
    title: 'About'
  },
  {
    screen: 'Feedback',
    title: 'Feedback'
  }
];

export default class SideBar extends React.Component {
  render() {
    return (
      <Container style={styles.mainContainer}>
        <Content>
          <ImageBackground
            style={styles.sideBarImage}
            source={require('../img/background.jpg')}>
          <Image
            square
            style={{ height: 80, width: 70 }}
            source={require('../img/logo.png')}
          />
            <Text style={styles.sideBarTitle}>Track ME</Text>
          </ImageBackground>
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
