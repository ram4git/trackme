import React from 'react';
import { AppRegistry, Alert, View } from 'react-native';
import { Container, Header, Left, Body, Title, Card, CardItem, Content, Right, Icon, Button, Text } from "native-base";
import { Image } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import call from 'react-native-phone-call'
import CreditCard from 'react-native-credit-card';

import { getRandomContacts } from '../api/uinames';
import styles from '../styles/styles';

export default class RequestDetails extends React.Component {

  constructor(props) {
    super(props);
    // Not the IDEAL way
    // To support Random Profile from SideBar
    this.info = props.info || props.navigation.state.params.info
  }

   renderHeader() {
     return (
       <Header>
       <Left>
         <Button transparent
            onPress={() => this.props.navigation.navigate('Home')}>
            <Icon name='arrow-back' />
         </Button>
       </Left>
         <Body>
           <Title>REQUEST DETAILS</Title>
         </Body>
         <Right />
       </Header>
     );
   }

   renderTextCard(title, info) {
     return (
       <Card>
         <CardItem>
           <Body style={styles.centeredDiv}>
             <Text style={styles.bigText}>{title}</Text>
             <Text style={styles.smallText}>{info}</Text>
           </Body>
         </CardItem>
        </Card>
     );
   }

   renderImageCardWithNameAndMobile() {
     const { name, surname, phone, photo, title } = this.info;

     return (
       <Card>
         <CardItem style={styles.cardTop}>
           <Body style={styles.centeredDiv}>
             <Text>{title}</Text>
             <Text style={styles.name}>{`${name} ${surname}`}</Text>
           </Body>
         </CardItem>
         <CardItem cardBody>
           <Image source={{ uri: `${photo}`}} style={{height: 300, width: null, flex: 1}}/>
         </CardItem>
         <CardItem>
           <Body style={styles.centeredDiv}>
               <Text style={styles.mobile}
                  onPress={() => call({number: `${phone}`}) }>
                <Icon name='ios-phone-portrait' /> {phone}
               </Text>
           </Body>
         </CardItem>
       </Card>
     )
   }



   renderBirthday() {
     const { birthday } = this.info;
     return this.renderTextCard(birthday.dmy, 'BIRTHDAY');
   }

   renderAge() {
     const { age } = this.info;
     return this.renderTextCard(age, 'AGE');
   }

   renderRegion() {
     const { region } = this.info;
     return this.renderTextCard(region, 'FROM');
   }

   renderCreditCard() {
     const { name, surname, credit_card } = this.info;
     const { number, expiration, pin, security } = credit_card;
     const fixedExpiration = expiration.length === 5 ? expiration : `0${expiration}`;
     const fixedNumber = number.split('-').join('');


     return (
       <Card>
         <CardItem>
           <Body style={styles.centeredDiv}>
           <CreditCard
            type={'visa'}
            shiny={false}
            bar={false}
            number={fixedNumber}
            name={name}
            bar={true}
            shiny={true}
            expiry={fixedExpiration}
            cvc={pin} />
           </Body>
         </CardItem>
        </Card>
     );

   }

  render() {
    return (
      <Container style={styles.contactContainer}>
        <Content padder>
          { this.renderHeader() }
          { this.renderImageCardWithNameAndMobile() }
          { this.renderBirthday() }
          { this.renderAge() }
          { this.renderRegion() }
          { this.renderCreditCard() }
        </Content>
      </Container>
    );
  }
}
