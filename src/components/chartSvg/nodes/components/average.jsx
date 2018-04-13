import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { NODE_ATTRIBUTE } from '../../util/constant';
import { CHART_WIDTH } from '../../../../util/constant';
import { transformDecorator } from 'rc-chart-slider';

/**
 * 渲染平均时间
 */
@transformDecorator(CHART_WIDTH)
class average extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
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

  getNodeNormalStatus = node => {
    return (moment(node.value.endTime).valueOf() - moment(node.value.startTime).valueOf()) >= node.averageValue;
  };

  render() {
    const { startX, startY, node } = this.props;
    const rectWidth = this.calAverageWidth(node);
    return (
      <rect x={startX * 1}
            y={startY * 1 + NODE_ATTRIBUTE.averaqe.y}
            width={rectWidth} height={NODE_ATTRIBUTE.averaqe.height}
            fill={this.getNodeNormalStatus(node) ? "#D9F7BE" : "#FFE7BA"}
      />
    );
  }
}

export default average;
