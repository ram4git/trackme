import React from 'react';

import {
  Container,
  Content,
  Text,
  Button,
  Icon,
  CardItem
} from 'native-base';


import styles from '../styles/styles';

export default class Error extends React.Component {

  render() {

  const { errorCode='UNEXPECTED ERROR', errorMsg='Check your internet connectivity and try again.', onRefreshRequest } = this.props

    return (
      <Container style={styles.error}>
        <Content padder style={styles.erroContainer}>
          <Text style={styles.errorHeader}>{errorCode}</Text>
          <Text style={styles.errorMsg}>{errorMsg}</Text>
          <Button transparent info onPress={ () => {onRefreshRequest()} }>
            <Text>Try again</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
