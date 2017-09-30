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
  requestSearch
} from './Actions/'

import {
  addBook
} from '../MyBooks/Actions'
import {
  getBooks
} from './Selectors/'
import { Actions as NavigatorActions } from 'react-native-router-flux'

import ListCardLarge from '../../Components/ListCardLarge'
import TopHeader from '../../Components/TopHeader'
import Placeholder from '../../Components/Placeholder'

class SearchScreen extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      query: null
    }
  }

  _renderCell({item}) {
    return (
      <ListCardLarge 
        addBook={(book) => this.props.addBook(book)}
        data={item} 
        showIcon={true}
      />
    )
  }

  _renderBody() {
    const { isFetching, books } = this.props
    console.log(books)
    if (isFetching) {
      return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator color={'white'}/>
      </View>
      )
    }

    if (!books) {
      return (
        <Placeholder />
      )
    }

    return (
      books.length > 0 && 
        <FlatList
          style={{padding: 5}}
          data={this.props.books}
          renderItem={(item) => this._renderCell(item)}
        />
    )
  }

  render() {
    const { query } = this.state
    const { error, requestSearch } = this.props

    return (
      <View style={BaseStyles.container}>
        <TopHeader 
          title={'Book Search'}
          placeholder={'Type here...'}
          leftIcon={true}
          getText={(query) => this.setState({query})}
          action={() => requestSearch(query)}
          iconName={'book'}
          iconAction={() => NavigatorActions.MyBooks()}
        />
        {this._renderBody()}
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  books: getBooks(state),
  isFetching: state.books.isFetching,

})

export default connect(mapStateToProps, { 
  requestSearch,
  addBook
})(SearchScreen)
