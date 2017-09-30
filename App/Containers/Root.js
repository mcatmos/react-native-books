import React, { Component } from 'react'
import { NativeModules } from 'react-native'
import { 
  Router, 
  Scene,
  Stack
} from 'react-native-router-flux'
import {
  Search,
  MyBooks
} from '../Features/'
import { Colors } from '../Themes/'
import { Provider } from 'react-redux'
import createStore from '../Redux'

class Root extends Component {

  componentWillMount() {
    this.store = createStore()
  }

  render() {
    return (
      <Provider store={this.store}>
        <Router>
          <Stack name="root">
            <Scene
              navigationBarStyle={{backgroundColor: Colors.grey}}
              titleStyle={{color: Colors.white}}
              key={'Books'}
              initial={true}
              component={Search}
              hideNavBar={true}
            />
            <Scene
              navigationBarStyle={{backgroundColor: Colors.grey}}
              titleStyle={{color: Colors.white}}
              key={'MyBooks'}
              component={MyBooks}
              hideNavBar={true}
            />
          </Stack>
        </Router>
      </Provider>
    )
  }
}

export default Root