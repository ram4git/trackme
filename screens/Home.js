import React from 'react';
import styles from '../styles/styles';
import { Text, Container, Header, Content, Button, Body, Title, Icon } from 'native-base';
import { Badge } from 'react-native-elements';

export default class Home extends React.Component {

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

}
