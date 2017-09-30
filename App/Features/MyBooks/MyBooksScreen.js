import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  ActivityIndicator,
  Animated
} from 'react-native'
import { connect } from 'react-redux'
import { BaseStyles, Colors } from '../../Themes/'
import {
  getMyBooks
} from './Selectors/'
import { Actions as NavigatorActions } from 'react-native-router-flux'
import {
  addBook,
  removeBook
} from './Actions'
import ListCardLarge from '../../Components/ListCardLarge'
import TopHeader from '../../Components/TopHeader'

class MyBooksScreen extends Component {
  constructor(props) {
    super(props) 
  }

  _renderCell({item}) {
    return (
      <ListCardLarge 
        data={item} 
      />
    )
  }

  _renderBody() {
    const { isFetching, myBooks } = this.props
    
    if (isFetching) {
      return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator color={'white'}/>
      </View>
      )
    }

    return (
      myBooks.length > 0 && 
        <FlatList
          style={{padding: 5}}
          data={this.props.myBooks}
          renderItem={(item) => this._renderCell(item)}
        />
    )
  }

  render() {
    const { error } = this.props

    return (
      <View style={BaseStyles.container}>
         <TopHeader
          title={'My Books'}
          getText={(text) => this.setState({text})}
          action={() => console.log('text')}
          placeholder={'Filter'}
          leftIcon={true}
          iconName={'search'}
          iconAction={() => NavigatorActions.pop()}
        />
        {this._renderBody()}
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  myBooks: getMyBooks(state)
})

export default connect(mapStateToProps, { 
  addBook,
  removeBook
})(MyBooksScreen)
