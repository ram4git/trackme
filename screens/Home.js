/*import React from 'react';*/
import styles from '../styles/styles';
import { Text, Container, Header, Content, Button, Body, Title, Icon } from 'native-base';
import { Badge } from 'react-native-elements';

/*export default class Home extends React.Component {

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>DASHBOARD</Title>
          </Body>
        </Header>
        <Content style={styles.mainContent}>
          <Text>You have 3 pending requests</Text>
          <Button block>
            <Icon name='md-add' />
            <Text>Create New Request</Text>
          </Button>
        </Content>
      </Container>
    )
  }

}*/



import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {
    action1
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


const Component1 = (props) => {
    return (
        <Container>
            <Header>
                <Body>
                <Title>DASHBOARD</Title>
                </Body>
            </Header>
            <Content style={styles.mainContent}>
                <Text>You have 3 pending requests</Text>
                <Button onPress={props.action1} block>
                    <Icon name='md-add' />
                    <Text>From Redux { props.number }</Text>
                </Button>
                {
                    props.updatedData.map((item, index) =>
                        <Text>{item}</Text>
                    )
                }
            </Content>
        </Container>
    )
}

function mapStateToProps(state, props) {
    return {
        number: state.reducer1.thisIsDefault,
        updatedData : state.reducer1.dataFromApi
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        action1
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Component1);

