import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList
} from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Octicons'
import { BaseStyles } from '../../Themes/'
import {
  requestSearch
} from './Actions/'
import {
  getBooks
} from './Selectors/'
import { Actions as NavigatorActions } from 'react-native-router-flux'

class SearchScreen extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      query: null
    }
  }

  _renderRow({item}) {
    return (
      <View style={{
        backgroundColor: 'white', 
        margin: 5, 
        borderRadius: 10,
        padding: 10,
        paddingTop: 30
        }}>
        <Text style={BaseStyles.titleCard}>{item.title}</Text>
        <Text>{item.author_name}</Text>
        <Text>{item.publisher}</Text>
        <Text>{item.first_publish_year}</Text>
      </View>
    )
  }

  render() {
    const { query } = this.state
    const { error, books, requestSearch } = this.props
    
    return (
      <View style={BaseStyles.container}>
        <View style={BaseStyles.topContainer}>
          <Text style={BaseStyles.mainTitle}>Book Search</Text>
          <TextInput 
            placeholder={'Type here..'}
            placeholderTextColor={'grey'}
            style={BaseStyles.inputLarge}
            onChangeText={(query) => this.setState({query})}
            onSubmitEditing={() => requestSearch(query)}
          />
        </View>
        {books.length > 0 && 
          <FlatList
            style={{padding: 5}}
            data={this.props.books}
            renderItem={(item) => this._renderRow(item)}
          />
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  books: getBooks(state)
})

export default connect(mapStateToProps, { 
  requestSearch
})(SearchScreen)
