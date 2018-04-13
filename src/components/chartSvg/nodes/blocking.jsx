import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ROW_HEIGHT, START_INDEX } from '../util/constant';
import { CHART_WIDTH } from '../../../util/constant';

class Blocking extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { nodes } = this.props;
    return (
      <g>
        <rect
          x={-1 * START_INDEX[0]}
          y={-1 * START_INDEX[1]}
          width={START_INDEX[0]}
          height={nodes.length * ROW_HEIGHT + START_INDEX[1]}
          fill="#fff"
        />
        <rect
          x={CHART_WIDTH}
          y={-1 * START_INDEX[1]}
          width={200}
          height={nodes.length * ROW_HEIGHT + START_INDEX[1]}
          fill="#fff"
        />
      </g>
    );
  }
}

export default Blocking;
