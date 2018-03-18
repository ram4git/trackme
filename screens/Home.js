/*import React from 'react';*/
import styles from '../styles/styles';
import { Text, Container, Header, Content, Button, Body, Title, Icon } from 'native-base';
import { Badge } from 'react-native-elements';
import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {
     getAllOpenCases
} from "./../action/action";
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


const homeComponent = (props) => {

  //we should make a call to get all opencases everytime user lands on home page
   props.getAllOpenCases();

    return (
        <Container>
            <Header>
                <Body>
                <Title>DASHBOARD</Title>
                </Body>
            </Header>
            <Content style={styles.mainContent}>
                <Text>You have 3 pending requests</Text>
                <Button onPress={props.getAllOpenCases} block>
                <Icon name='md-add' />
                <Text>From Redux { props.openCasesCount }</Text>
                </Button>
                  {
                    props.openCases.map((item, index) =>
                        <Text>{item}</Text>
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
