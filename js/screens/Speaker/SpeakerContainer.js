import React, {Component} from 'react';
import Speaker from './Speaker';
import PropTypes from 'prop-types';

export default class SpeakerContainer extends Component {
  render() {
    const speaker = this.props.route.params.speaker;
    return <Speaker speaker={speaker} navigation={this.props.navigation} />;
  }
}

SpeakerContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};
