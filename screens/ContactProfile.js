import React from "react";
import { AppRegistry, Alert } from "react-native";
import { Container, Header, Left, Body, Spinner, Title, Card, CardItem, Content, Right, Icon, Button, Text } from "native-base";
import { Image } from 'react-native';
import { StackNavigator } from "react-navigation";
import { getRandomContacts } from '../api/uinames';
import styles from '../styles/styles';
import call from 'react-native-phone-call'
import CreditCard from 'react-native-credit-card';



export default class ContactProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

   componentDidMount() {
     getRandomContacts(1)
       .then( response => {
         this.setState({
           info: response,
           isLoading: false
         });
       })
       .catch(error => {
         this.setState({
           errorMsg: error,
           isLoading: false
         })
       });

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
           <Title>CONTACT INFO</Title>
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
     const { name, surname, phone, photo, title } = this.state.info;

     return (
       <Card>
         <CardItem>
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
     const { birthday } = this.state.info;
     return this.renderTextCard(birthday.dmy, 'BIRTHDAY');
   }

   renderAge() {
     const { age } = this.state.info;
     return this.renderTextCard(age, 'AGE');
   }

   renderRegion() {
     const { region } = this.state.info;
     return this.renderTextCard(region, 'FROM');
   }

   renderCreditCard() {
     const { name, surname, credit_card } = this.state.info;
     const { number, expiration, pin, security } = credit_card;

     return (
       <Card>
         <CardItem>
           <Body style={styles.centeredDiv}>
           <CreditCard
            type={'visa'}
            shiny={false}
            bar={false}
            number={number}
            name={name}
            expiry={expiration}
            cvc={pin} />
           </Body>
         </CardItem>
        </Card>
     );

   }


  render() {
    console.log('INFO=', this.state.info);
    if(this.state.isLoading) {
      return <Spinner />;
    }

    return (
      <Container>
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
ContactProfile.navigationOptions = ({ navigation }) => ({
  header: (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate('Contacts')}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Profile</Title>
      </Body>
      <Right />
    </Header>
  )
});
