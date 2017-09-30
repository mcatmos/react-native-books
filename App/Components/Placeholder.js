import React from 'react'
import {
  View,
  Text
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Colors } from '../Themes'

const Placeholder = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Icon 
        name='lightbulb-outline' 
        size={100} 
        color={Colors.white} 
      />
    </View>
  )
}

export default Placeholder