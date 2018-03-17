/*import React from 'react';*/
import styles from '../styles/styles';
import { Text, Container, Header, Content, Button, Body, Title, Icon } from 'native-base';
import { Badge } from 'react-native-elements';
import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {
    action1, getAllLiveCases
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
    return (
        <Container>
            <Header>
                <Body>
                <Title>DASHBOARD</Title>
                </Body>
            </Header>
            <Content style={styles.mainContent}>
                <Text>You have 3 pending requests</Text>
                <Button onPress={props.getAllLiveCases} block>
                <Icon name='md-add' />
                <Text>From Redux { props.liveCasesCount }</Text>
                </Button>
                  {
                    props.allLiveCases.map((item, index) =>
                        <Text>{item}</Text>
                  )
                }
            </Content>
        </Container>
    )
}

function mapStateToProps(state, props) {
    return {
        liveCasesCount: state.homeReducer.liveCasesCount,
        allLiveCases : state.homeReducer.allLiveCases
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getAllLiveCases
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(homeComponent);
