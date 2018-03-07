import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  contactContainer: {
    backgroundColor: '#f9f9f9'
  },

  name: {
    fontSize: 34,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 0
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
  }

});


export default styles;
