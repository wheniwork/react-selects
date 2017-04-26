import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Dropdown extends Component {
	static propTypes = {
		children: PropTypes.node,
	};

	render() {
		// This component adds no markup
		return this.props.children;
	}
}

export default  Dropdown;
