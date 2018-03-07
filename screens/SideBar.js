import React from "react";
import { AppRegistry, ImageBackground, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
const routes = [
  {
    screen: 'Home',
    title: 'Contacts Page'
  },
  {
    screen: 'Profile',
    title: 'Random Contact'
  }
];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <ImageBackground
            source={{
              uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/drawer-cover.png"
            }}
            style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}>
            <ImageBackground
              square
              style={{ height: 80, width: 70 }}
              source={{
                uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/logo.png"
              }}
            />
          </ImageBackground>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data.screen)}>
                  <Text>{data.title}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
