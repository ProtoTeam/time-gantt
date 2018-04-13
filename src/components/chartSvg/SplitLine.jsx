import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { COLUMN_NUM, CHART_WIDTH } from '../../util/constant';
import { ROW_HEIGHT } from './util/constant';
import { transformDecorator } from 'rc-chart-slider';

@transformDecorator(CHART_WIDTH)
class SplitLine extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
  };

  calTopBottomNodes = data => {
    const { columnWidth, nodes } = data;
    const topNodes = [];
    const bottomNodes = [];

    for (let i = 0;i < COLUMN_NUM + 1; i++) {
      topNodes.push([i * columnWidth, 0]);
      bottomNodes.push([i * columnWidth, nodes.length * ROW_HEIGHT ]);
    }
    return {
      topNodes,
      bottomNodes
    };
  };

  calVerticalLineXY = data => {
    const { topNodes, bottomNodes } = data;
    const res = [];
    for (let i = 0;i < COLUMN_NUM + 1; i++) {
      res.push([topNodes[i], bottomNodes[i]]);
    }
    return res;
  };

  calLeftRightNodes = data => {
    const { columnWidth, nodes } = data;
    const leftNodes = [];
    const rightNodes = [];
    for (let i = 0;i < nodes.length + 1; i++) {
      leftNodes.push([0, i * ROW_HEIGHT]);
      rightNodes.push([COLUMN_NUM * columnWidth, i * ROW_HEIGHT ]);
    }
    return {
      leftNodes,
      rightNodes
    };
  };

  calHorizontalLineXY = data => {
    const { leftNodes, rightNodes, nodes } = data;
    const res = [];
    for (let i = 0;i < nodes.length + 1; i++) {
      res.push([leftNodes[i], rightNodes[i]]);
    }
    return res;
  };

  /**
   * 得到横线的坐标
   */
  getVerticalLineXY = data => {
    const {columnWidth, nodes} = data;
    const { topNodes, bottomNodes } = this.calTopBottomNodes({columnWidth, nodes});
    return this.calVerticalLineXY({ topNodes, bottomNodes });
  };

  /**
   * 得到竖线的坐标
   */
  getHorizontalLineXY = data => {
    const { columnWidth, nodes } = data;
    const { leftNodes, rightNodes } = this.calLeftRightNodes({columnWidth, nodes});
    return this.calHorizontalLineXY({ leftNodes, rightNodes, nodes });
  };

  render() {
    const { data, nodes, columnWidth } = this.props;
    const { showStartPercent } = data;
    const showIndex = showStartPercent * COLUMN_NUM;
    const verticalLineXY = this.getVerticalLineXY({
      columnWidth, nodes
    });
    const horizontalLineXY = this.getHorizontalLineXY({
      columnWidth, nodes
    });
    return (
      <g>
        {verticalLineXY.map((line, index) => {
          if (index < showIndex ) return null;
          return (
            <line key={index} x1={line[0][0]} y1={line[0][1]} x2={line[1][0]} y2={line[1][1]}
                  strokeDasharray="5, 2" strokeWidth="1" strokeOpacity="0.09" stroke="black"
            />
          );
        })}
        {horizontalLineXY.map((line, index) => {
          return (
            <line key={index}
                  x1={line[0][0]} y1={line[0][1]} x2={line[1][0]} y2={line[1][1]}
                  strokeDasharray="5, 2" strokeWidth="1" strokeOpacity="0.09" stroke="black"
            />
          );
        })}
      </g>
    );
  }
}

export default SplitLine;
