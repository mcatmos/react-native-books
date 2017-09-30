import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native'

import { Actions as NavActions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Colors, Fonts, BaseStyles } from '../Themes/'

const TopHeader = ({
  getText,
  action,
  title,
  placeholder,
  leftIcon,
  iconAction,
  iconName
}) => {
  return (
    <View style={styles.container}>  
      <View style={styles.topContainer}>
        <Text style={BaseStyles.mainTitle}>{title}</Text>
        {leftIcon && <Icon 
          name={iconName} 
          size={35}
          onPress={() => iconAction()}
          style={{padding: 10}} 
          color={Colors.blue} 
        />}
      </View>
      <TextInput 
        placeholder={placeholder}
        placeholderTextColor={'grey'}
        style={BaseStyles.inputLarge}
        onChangeText={(query) => getText(query)}
        onSubmitEditing={() => action()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.cream,
    paddingTop: 50,
    borderBottomWidth: 5,
    borderBottomColor: Colors.white
  },
  topContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between'
  }
})

export default TopHeader
