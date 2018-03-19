/*import React from 'react';*/
import styles from '../styles/styles';
import { Badge } from 'react-native-elements';
import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {
     getAllOpenCases
} from "./../action/action";
import { StatusBar, TouchableHighlight, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { SearchBar } from 'react-native-elements'

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
  Icon,
  CardItem,
  Item,
  Input,
  Button
} from 'native-base';
/*import {
    Modal,
    Text,
    TouchableHighlight,
    View,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity
} from 'react-native';*/

const   onCardSelect = (cardInfo) => {

}

const homeComponent = (props) => {

  //we should make a call to get all opencases everytime user lands on home page
  if(props.openCases == null || props.openCases.length === 0)
   props.getAllOpenCases();

    return (
        <Container>
            <Header>
                <Body>
                <Title>DASHBOARD</Title>
                </Body>
            </Header>
            <Content style={styles.mainContent}>
                <Text>You have 3 requests that needs your action</Text>
                <Button onPress={props.getAllOpenCases} block>
                <Icon name='md-add' />
                <Text>Open a case</Text>
                </Button>
                  {
                    props.openCases.map((item, index) =>
                    <Card key={item} >
                    <TouchableHighlight>
                      <CardItem avatar style={styles.contactCard}>
                        <Left style={styles.noMargin}>
                          <Thumbnail
                          />
                        </Left>
                        <Body>
                          <Text style={styles.contactName}>{item}</Text>
                          <Text style={styles.contactNumber}>{item}</Text>
                        </Body>
                        <Right style={styles.smallIcon}>
                          <Icon name='arrow-forward' />
                        </Right>
                      </CardItem>
                      </TouchableHighlight>
                    </Card>
                  )
                }
            </Content>
        </Container>
    )
}

function mapStateToProps(state, props) {
    return {
        openCasesCount: state.homeReducer.openCasesCount,
        openCases : state.homeReducer.openCases
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getAllOpenCases
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(homeComponent);
