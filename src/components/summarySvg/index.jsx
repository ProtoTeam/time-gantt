import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './index.less';
import { CHART_WIDTH } from '../../util/constant';

class SummarySvg extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
  };

  /**
   * 将不需要显示的时间截掉，省掉了拿空白处遮挡
   */
  dealPropsNodes = (nodes, showDate) => {
    const newNodes = [];
    nodes.forEach(node => {
      if (moment(showDate).valueOf() < moment(node.value.endTime).valueOf() ||
        moment(showDate).add(1, 'day').valueOf() > moment(node.value.startTime).valueOf()
      ) {
        newNodes.push(Object.assign({}, node, {
          value: Object.assign({}, node.value, {
            startTime: moment(showDate).valueOf() > moment(node.value.startTime).valueOf() ? showDate : node.value.startTime,
            endTime: moment(showDate).add(1, 'day').valueOf() < moment(node.value.endTime).valueOf() ? moment(showDate).add(1, 'day').format('YYYY-MM-DD') : node.value.endTime,
          })
        }))
      }
    });
    return newNodes;
  };

  getNodeNormalStatus = node => {
    return (moment(node.value.endTime).valueOf() - moment(node.value.startTime).valueOf()) >= node.averageValue;
  };

  // 计算所有点的所有坐标
  calXYArr = showNodes => {
    const { data } = this.props;
    const intervalY = (30 / showNodes.length).toFixed(6) * 1;
    const res = [];
    showNodes.forEach((node, index) => {
      const startPercent = (moment(node.value.startTime).valueOf() - moment(data.showDate).valueOf()) / 1000 / 60 / 60 / 24;
      const percent = (moment(node.value.endTime).valueOf() - moment(node.value.startTime).valueOf()) / 1000 / 60 / 60 / 24;
      const width = (percent * CHART_WIDTH).toFixed(6) * 1;
      const startWidth = (startPercent * CHART_WIDTH).toFixed(6) * 1;
      res.push({
        1: [ startWidth, intervalY * index ],
        2: [ startWidth + width, intervalY * index ],
        node,
      });
    });
    return res;
  };

  render() {
    const { data } = this.props;
    const showNodes = this.dealPropsNodes(data.nodes, data.showDate);
    const showNodesXYArr = this.calXYArr(showNodes);
    return (
      <svg
        version="1.1"
        baseProfile="full"
        width={CHART_WIDTH} height={30}
        xmlns="http://www.w3.org/2000/svg"
      >
        {showNodesXYArr.map((node, index) => {
          return (
            <line
              key={index}
              x1={node[1][0]}
              y1={node[1][1]}
              x2={node[2][0]}
              y2={node[2][1]}
              stroke={this.getNodeNormalStatus(node.node) ? "#52C41A" : "#FA8C16"}
              strokeWidth="1"
            />
          );
        })}
      </svg>
    );
  }
}

export default SummarySvg;
