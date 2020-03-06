import React, {Component} from 'react';
import Session from './Session';

export default class SessionContainer extends Component {
  render() {
    return <Session data={this.props.route.params.item} />;
  }
}
