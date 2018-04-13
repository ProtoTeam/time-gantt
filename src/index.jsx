import React, { PureComponent } from 'react';
import Title from './components/title/index.jsx';
import ChartSvg from './components/chartSvg/index.jsx';
import XAxisSvg from './components/XAxisSvg/index.jsx';
import SummarySvg from './components/summarySvg/index.jsx';
import { CHART_WIDTH, COLUMN_NUM, CLICK_JUMP_PERCENT } from './util/constant';
import { DraggingDecorator, DragComponent } from 'rc-chart-slider';
import './index.less';

@DraggingDecorator(CHART_WIDTH)
class Gantt extends PureComponent {

  /**
   * 可以获得拖拽的结果
   */

  callBack = data => {
    // console.log(data);
  };

  render() {
    const { data } = this.props;
    const { title, showPercent, showStartPercent } = data;
    const columnWidth = (CHART_WIDTH / (showPercent * COLUMN_NUM)).toFixed(6);
    const svgWith = columnWidth * COLUMN_NUM;
    return (
      <div className="gantt">
        <div className="gantt-chart">
          <Title title={title} />
          <ChartSvg data={data} columnWidth={columnWidth} svgWith={svgWith} />
          <XAxisSvg data={data} columnWidth={columnWidth} svgWith={svgWith} />
        </div>
        <div className="g-drag-container">
          <SummarySvg data={data} />
          <DragComponent
            data={{
              showPercent,
              showStartPercent,
            }}
            width={CHART_WIDTH}
            clickJumpPercent={CLICK_JUMP_PERCENT}
            callback={this.callBack}
            _dragActions={this.props._dragActions}
          />
        </div>
      </div>
    );
  }
}

export default Gantt;
