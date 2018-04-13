import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { COLUMN_NUM } from '../../../../util/constant';
import { NODE_ATTRIBUTE } from '../../util/constant';

/**
 * 渲染节点名称
 */
class NodeName extends PureComponent {
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

  /**
   * 计算average块的宽度
   */
  calAverageWidth = node => {
    const { columnWidth, showDate } = this.props;
    const costMills = moment(node.averageValue).valueOf();
    let showCoustMills = costMills;
    if (moment(node.value.startTime).valueOf() < moment(showDate).valueOf()) {
      showCoustMills = moment(node.value.startTime).valueOf() + costMills - moment(showDate).valueOf();
    }
    if (showCoustMills < 0) {
      showCoustMills = 0;
    }
    return ((showCoustMills / 1000 / 60 / 30 * columnWidth).toFixed(2)) * 1;
  };

  render() {
    const { columnWidth, data, startX, startY, node } = this.props;
    const { showStartPercent } = data;
    const transformX = showStartPercent * COLUMN_NUM * columnWidth;
    const valueEndX = startX * 1 + this.calValueWidth(node);
    const averageEndX = startX * 1 + this.calAverageWidth(node);
    let resTransformX = transformX;

    if (startX * 1 < transformX && (valueEndX > transformX || averageEndX > transformX )) {
      resTransformX = startX * 1;
    }
    return (
      <text
        x={startX * 1}
        y={startY * 1 + NODE_ATTRIBUTE.name.y}
        fontSize="12"
        transform={`translate(${ resTransformX * -1 }, 0)`}
        fill="#666666"
      >
        {node.name}
      </text>
    );
  }
}

export default NodeName;
