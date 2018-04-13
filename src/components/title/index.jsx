import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Title extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { title } = this.props;
    return (
      <div className="g-title">{title}</div>
    );
  }
}

export default Title;
