import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },

  contactContainer: {
    backgroundColor: '#f9f9f9'
  },

  name: {
    fontSize: 34,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 0,
    color: '#3742fa'
  },

  cardTop: {
    backgroundColor: '#f1f2f6'
  },

  centeredDiv: {
    alignItems: 'center',
  },

  mobile: {
    fontSize: 36,
    textAlign: 'center',
    alignItems: 'center',
    marginBottom: 0,
    color: '#34495e'
  },

  contactName: {
    fontSize: 20,
    color: '#3742fa',
    fontWeight: 'bold'
  },

  contactNumber: {
    fontSize: 20,
    color: '#34495e'
  },

  bigText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#16a085'
  },

  smallText: {
    fontSize: 12,
    color: '#e74c3c'
  },

  noMargin: {
    maxWidth: 80
  },

  smallIcon: {
    maxWidth: 20
  },

  sideBar: {
    backgroundColor: '#ecf0f1'
  },

  spinner: {
    flex: 1
  },

  sideBarItem: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#16a085'
  },
  
  sideBarTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    padding: -20
  },


  sideBarLogo: {
    height: 120,
    width: 120
  },

  error: {
    backgroundColor: '#c0392b',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  erroContainer: {
    marginTop: 120
  },

  errorHeader: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f39c12'
  },

  errorMsg: {
    fontSize: 20
  },
  
  sideBarImage: {
    height: 120,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  centerText: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  mainContent: {
    marginLeft: 20,
    marginRight: 20
  }
  

});


export default styles;
