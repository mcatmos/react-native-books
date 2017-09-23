import React from 'react'
import { 
  StyleSheet, 
  Dimensions 
} from 'react-native'
import colors from './Colors'
const { width } = Dimensions.get('window')

const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.salmon,
    justifyContent: 'flex-start',
  },
  mainTitle: {
    fontSize: 40,
    fontWeight: '900',
    margin: 10,
    fontFamily: 'helvetica',
    color: colors.grey
  },
  inputLarge: {
    height: 40, 
    width: 300,
    marginLeft: 10,
    fontFamily: 'helvetica',
    fontSize: 20
  },
  labelText: {
    fontSize: 16,
    fontWeight: '100',
    margin: 10,
    color: colors.white,
    fontFamily: 'helvetica'
  },
  topContainer: {
    backgroundColor: colors.cream,
    paddingTop: 50,
    borderBottomWidth: 5,
    borderBottomColor: colors.white
  },
  titleCard: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.grey,
    fontFamily: 'helvetica'
  }
})

export default baseStyles