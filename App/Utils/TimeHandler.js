import React, {
  Component
} from 'react'
import PropTypes from 'prop-types'
import {
  Text
} from 'react-native'

import moment from 'moment'
import TimerMixin from 'react-timer-mixin'

export default class TimeAgo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      updated: false
    }
  }

  componentDidMount() {
    const { interval } = this.props;

    /*Using bare setTimeout, setInterval, setImmediate and requestAnimationFrame calls is very dangerous
      because if you forget to cancel the request before the component is unmounted, you risk the callback
      throwing an exception.
      If you include TimerMixin, then you can replace your calls to setTimeout(fn, 500)
      with TimerMixin.setTimeout(fn, 500) (just prepend this.) and everything will be p
      roperly cleaned up for you.*/

    TimerMixin.setInterval(() => this.update(), interval);
  }

  update() {
    this.setState({
      updated: !this.state.updated
    })
  }

  render() {
    return (
      <Text {...this.props}>{moment(this.props.time).fromNow(this.props.hideAgo)}</Text>
    )
  }
}

TimeAgo.propTypes = {
  time: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.instanceOf(Date)
    ]).isRequired,
  interval: PropTypes.number,
  hideAgo: PropTypes.bool
}

TimeAgo.defaultProps = {
  hideAgo: false,
  interval: 60000
}