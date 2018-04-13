import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Popover } from 'antd';
import moment from 'moment';
import { getNodeNormalStatus } from '../../util/helper';
import { transformDecorator } from 'rc-chart-slider';
import { CHART_WIDTH } from '../../../../util/constant';
import { NODE_ATTRIBUTE } from '../../util/constant';

@transformDecorator(CHART_WIDTH)
class Value extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
  };

  /**
   * 计算value块的宽度
   */
  calValueWidth = node => {
    const { columnWidth, showDate } = this.props;
    let nodeStartTime = moment(node.value.startTime).valueOf();
    if (moment(node.value.startTime).valueOf() < moment(showDate).valueOf()) {
      nodeStartTime = moment(showDate);
    }
    const costMills = moment(node.value.endTime).valueOf() - nodeStartTime;
    return ((costMills / 1000 / 60 / 30 * columnWidth).toFixed(2)) * 1;
  };

  renderToolTip = node => {
    return (
      <div className="g-tooltip">
        <div className="status" style={{background: getNodeNormalStatus(node) ? "#52C41A" : "#FA8C16" }}></div>
        <div className="name">
          {node.name}
        </div>
      </div>
    );
  };

  render() {
    const { startX, startY, node, NODE_VALUE_END_X } = this.props;
    const rectWidth = this.calValueWidth(node);
    NODE_VALUE_END_X.push(startX * 1 + rectWidth * 1);
    return (
      <Popover placement="topLeft" content={this.renderToolTip(node)} title="">
        <rect
          x={startX * 1}
          y={startY * 1 + NODE_ATTRIBUTE.value.y}
          width={rectWidth}
          height={NODE_ATTRIBUTE.value.height}
          fill={getNodeNormalStatus(node) ? "#52C41A" : "#FA8C16"}
        />
      </Popover>
    );
  }
}

export default Value;
