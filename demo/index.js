import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Gantt from 'time-gantt';

const data = {
  title: "业务甘特图",
  showPercent: 0.1,
  showStartPercent: 0.2,
  showDate: '2018-04-01 00:00',
  nodes: [
    {
      id: '1',
      name: '小鹿1',
      yAxis: '任务1',
      url: 'www.baidu.com',
      value: {
        startTime: '2018-03-31 23:30',
        endTime: '2018-04-01 02:25',
      },
      averageValue: 3600000, // 毫秒
      highlightPoints: [{
        time: '2018-04-01 02:10',
      }],
    },
    {
      id: '2',
      name: '小鹿2',
      yAxis: '任务2',
      url: 'www.baidu.com',
      value: {
        startTime: '2018-04-01 03:20',
        endTime: '2018-04-01 03:40',
      },
      averageValue: 5600000,
      highlightPoints: [{
        time: '2018-04-01 03:30',
      }],
    },
    {
      id: '3',
      name: '小鹿3',
      yAxis: '任务2',
      url: 'www.baidu.com',
      value: {
        startTime: '2018-04-01 01:00',
        endTime: '2018-04-01 04:00',
      },
      averageValue: 3600000,
      highlightPoints: [{
        time: '2018-04-01 02:30',
      }],
    },
    {
      id: '4',
      name: '小鹿4',
      yAxis: '任务4',
      url: 'www.baidu.com',
      value: {
        startTime: '2018-04-01 02:00',
        endTime: '2018-04-01 03:24',
      },
      averageValue: 3600000,
      highlightPoints: [],
    },
    {
      id: '4',
      name: '小鹿5',
      yAxis: '任务5',
      url: 'www.baidu.com',
      value: {
        startTime: '2018-04-01 03:26',
        endTime: '2018-04-01 05:10',
      },
      averageValue: 3600000,
      highlightPoints: [{
        time: '2018-04-01 03:50',
      }, {
        time: '2018-04-01 04:40',
      }],
    },
    {
      id: '4',
      name: '小鹿6',
      yAxis: '任务6',
      url: 'www.baidu.com',
      value: {
        startTime: '2018-04-01 06:30',
        endTime: '2018-04-01 08:00',
      },
      averageValue: 7200000,
      highlightPoints: [{
        time: '2018-04-01 06:50',
      }],
    },
    {
      id: '4',
      name: '小鹿7',
      yAxis: '任务7',
      url: 'www.baidu.com',
      value: {
        startTime: '2018-04-01 07:00',
        endTime: '2018-04-01 09:12',
      },
      averageValue: 3600000,
      highlightPoints: [],
    },
    {
      id: '4',
      name: '小鹿8',
      yAxis: '任务8',
      url: 'www.baidu.com',
      value: {
        startTime: '2018-04-01 09:12',
        endTime: '2018-04-01 12:11',
      },
      averageValue: 3600000,
      highlightPoints: [{
        time: '2018-04-01 12:10',
      }],
    },
    {
      id: '4',
      name: '小鹿9',
      yAxis: '任务9',
      url: 'www.baidu.com',
      value: {
        startTime: '2018-04-01 13:00',
        endTime: '2018-04-01 15:10',
      },
      averageValue: 3600000,
      highlightPoints: [{
        time: '2018-04-01 14:10',
      }],
    },
    {
      id: '1',
      name: '小鹿10',
      yAxis: '任务10',
      url: 'www.baidu.com',
      value: {
        startTime: '2018-04-01 17:10',
        endTime: '2018-04-01 19:00',
      },
      averageValue: 3600000,
      highlightPoints: [],
    },
    {
      id: '2',
      name: '小鹿11',
      yAxis: '任务11',
      url: 'www.baidu.com',
      value: {
        startTime: '2018-04-01 19:00',
        endTime: '2018-04-01 20:55',
      },
      averageValue: 3600000,
      highlightPoints: [],
    },
    {
      id: '3',
      name: '小鹿12',
      yAxis: '任务12',
      url: 'www.baidu.com',
      value: {
        startTime: '2018-04-01 21:00',
        endTime: '2018-04-01 22:00',
      },
      averageValue: 3600000,
      highlightPoints: [{
        time: '2018-04-01 21:30',
      }],
    },
    {
      id: '4',
      name: '小鹿13',
      yAxis: '任务13',
      url: 'www.baidu.com',
      value: {
        startTime: '2018-04-01 22:00',
        endTime: '2018-04-01 22:30',
      },
      averageValue: 3600000,
      highlightPoints: [],
    },
    {
      id: '4',
      name: '小鹿14',
      yAxis: '任务14',
      url: 'www.baidu.com',
      value: {
        startTime: '2018-04-01 05:00',
        endTime: '2018-04-01 08:00',
      },
      averageValue: 1200000,
      highlightPoints: [],
    },
    {
      id: '4',
      name: '小鹿15',
      yAxis: '任务15',
      url: 'www.baidu.com',
      value: {
        startTime: '2018-04-01 09:00',
        endTime: '2018-04-01 14:00',
      },
      averageValue: 3600000,
      highlightPoints: [{
        time: '2018-04-01 11:10',
      }],
    },
    {
      id: '4',
      name: '小鹿16',
      yAxis: '任务16',
      url: 'www.baidu.com',
      value: {
        startTime: '2018-04-01 02:00',
        endTime: '2018-04-01 05:00',
      },
      averageValue: 3600000,
      highlightPoints: [{
        time: '2018-04-01 03:10',
      }],
    },
    {
      id: '4',
      name: '小鹿17',
      yAxis: '任务17',
      url: 'www.baidu.com',
      value: {
        startTime: '2018-04-01 18:33',
        endTime: '2018-04-01 21:00',
      },
      averageValue: 3600000,
      highlightPoints: [],
    },
    {
      id: '4',
      name: '小鹿18',
      yAxis: '任务18',
      url: 'www.baidu.com',
      value: {
        startTime: '2018-04-01 22:00',
        endTime: '2018-04-02 24:00',
      },
      averageValue: 3600000,
      highlightPoints: [{
        time: '2018-04-01 23:30',
      }],
    }
  ],
};

class App extends PureComponent {
  render () {
    return (
      <div className="container">
        <Gantt data={data}></Gantt>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
