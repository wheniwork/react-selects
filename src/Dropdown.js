import PropTypes from 'prop-types';
import React from 'react';

class Dropdown extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    // This component adds no markup
    return this.props.children;
  }
}

export default  Dropdown;
