import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Popover } from 'antd';
import { getNodeNormalStatus } from '../../util/helper';
import { NODE_ATTRIBUTE } from '../../util/constant';
import { CHART_WIDTH } from '../../../../util/constant';
import { transformDecorator } from 'rc-chart-slider';

const getTime = t => {
  const runTime = t / 1000;
  const seconds = runTime % 60;
  const minutes = (runTime - (runTime % 60)) / 60;
  const hours = (minutes - (minutes % 60)) / 60;
  if (hours) return `${hours} 时 ${minutes % 60} 分 ${seconds} 秒`;
  if (minutes) return `${minutes} 分 ${seconds} 秒`;
  return `${seconds}s`;
};

/**
 * 渲染等待时间
 */
@transformDecorator(CHART_WIDTH)
class WaitTime extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
  };

  /**
   * 渲染等待时间的文案
   */
  renderWaitingText = data => {
    const { lastNodeEndX, newNodeStartX, startY } = data;
    if (newNodeStartX - lastNodeEndX <= 55) return null;
    const textX =  (newNodeStartX - lastNodeEndX) / 2 + lastNodeEndX - 18;
    return (
      <g>
        <rect
          x={textX - 4}
          y={startY * 1 + NODE_ATTRIBUTE.value.y - 3}
          width="45"
          height="17"
          fill="#fff"
        />
        <text
          x={textX}
          y={startY * 1 + NODE_ATTRIBUTE.value.y + 10}
          fontSize="12"
          fill="#FFA940"
        >
          等待中
        </text>
      </g>
    );
  };

  renderToolTip = node => {
    return (
      <div className="g-tooltip">
        <div className="status" style={{background: getNodeNormalStatus(node) ? "#52C41A" : "#FA8C16" }}></div>
        <div className="name">
          {node.name}
        </div>
        <div className="item">
          <div className="key">等待时间</div>
          <div className="value">
            {getTime(node.averageValue)}
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { startX, startY, NODE_VALUE_END_X, node } = this.props;
    const lastNodeEndX = NODE_VALUE_END_X[NODE_VALUE_END_X.length - 1];
    const newNodeStartX = startX * 1;
    const drawStartY = startY * 1 + NODE_ATTRIBUTE.value.y;
    if (lastNodeEndX >= newNodeStartX || !lastNodeEndX) return null;
    return (
      <Popover placement="topLeft" content={this.renderToolTip(node)} title="">
        <g>
          <line
            x1={lastNodeEndX + 1}
            y1={drawStartY + 6}
            x2={newNodeStartX - 1}
            y2={drawStartY + 6}
            strokeDasharray="3, 3" strokeWidth="1" stroke="#FFA940"
          />
          <line
            x1={lastNodeEndX + 1}
            y1={drawStartY}
            x2={lastNodeEndX + 1}
            y2={drawStartY + 12}
            strokeWidth="1" stroke="#FFA940"
          />
          <line
            x1={newNodeStartX - 1}
            y1={drawStartY}
            x2={newNodeStartX - 1}
            y2={drawStartY + 12}
            strokeWidth="1" stroke="#FFA940"
          />
          {this.renderWaitingText({ lastNodeEndX, newNodeStartX, startY })}
        </g>
      </Popover>
    );
  }
}

export default WaitTime;
