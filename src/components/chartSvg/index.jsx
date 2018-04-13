import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import YAxis from './YAxis.jsx';
import SplitLine from './SplitLine.jsx';
import Nodes from './nodes/index.jsx';
import { ROW_HEIGHT, START_INDEX } from './util/constant';

class ChartSvg extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { data, svgWith, columnWidth } = this.props;
    const { nodes, showPercent, showStartPercent, showDate } = data;
    const needHeight = ROW_HEIGHT * nodes.length + START_INDEX[1];
    return (
      <div className="g-chart-container">
        <svg
          version="1.1"
          baseProfile="full"
          width={svgWith + 146} height={needHeight}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            transform={`translate(${START_INDEX[0]}, ${START_INDEX[1]})`}
          >
            <SplitLine
              nodes={nodes}
              data={{
                showPercent,
                showStartPercent,
              }}
              columnWidth={columnWidth}
            />
            <Nodes
              nodes={nodes}
              showPercent={showPercent}
              showStartPercent={showStartPercent}
              showDate={showDate}
              columnWidth={columnWidth}
            />
          </g>
          <YAxis nodes={nodes} />
        </svg>
      </div>
    );
  }
}

export default ChartSvg;
