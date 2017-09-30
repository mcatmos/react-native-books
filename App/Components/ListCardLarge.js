import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Animated
} from 'react-native'

import {
  BaseStyles,
  Colors
} from '../Themes/'

import Icon from 'react-native-vector-icons/MaterialIcons'

const ANIMATION_DURATION = 300;

class ListCardLarge extends Component {
  constructor(props) {
    super(props)

    this._animated = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this._animated, {
      toValue: 1,
      duration: ANIMATION_DURATION,
    }).start()
  }

  render() {
    const container = [
      styles.container,
      { opacity: this._animated },
      {
        transform: [
          { scale: this._animated },
          {
            rotate: this._animated.interpolate({
              inputRange: [0, 1],
              outputRange: ['35deg', '0deg'],
              extrapolate: 'clamp',
            })
          }
        ]
      }
    ]

    const { data, addBook, showIcon } = this.props
    return (
      <Animated.View style={container}>
        <View style={styles.topContainer}>
          <Text style={BaseStyles.titleCard}>{data.title}</Text>
          {showIcon && 
            <Icon 
              name="favorite-border" 
              onPress={() => addBook(data)}
              size={30}
              color={Colors.salmon}
            />
          }
        </View>
        <Text style={BaseStyles.subtitle}>{data.author_name}</Text>
        <Text>{data.publisher}</Text>
        <Text>{data.first_publish_year}</Text>
      </Animated.View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white', 
    margin: 5, 
    borderRadius: 10,
    padding: 10,
    paddingTop: 30
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export default ListCardLarge