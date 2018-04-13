### time-gantt
一个react类甘特图图表，功能是时间基线上的任务耗时管理，并且能够与过往耗时进行对比。

### 运行效果
![image](https://gw.alipayobjects.com/zos/rmsportal/YixcFSrFjFjYLhVjOHWO.gif)
可以直接去demo文件夹运行。进入deo文件夹。
```
    npm install
    npm start
```

### 使用
```
    npm i time-gantt --save
```

调用
```
    import Gantt from 'time-gantt';
    <Gantt data={data}></Gantt>
```

### 接口
data的数据结构：

```javascript
const data = {
  title: "业务甘特图", // 图表名
  showPercent: 0.1, // 显示百分比
  showStartPercent: 0.2, // 起始位置百分比
  showDate: '2018-04-01 00:00', // 展示的日期
  nodes: [
    {
      id: '1',
      name: '小鹿1', // 任务名
      yAxis: '任务1', // Y 轴
      value: {   // 运行时间
        startTime: '2018-03-31 23:30',
        endTime: '2018-04-01 02:25',
      },
      averageValue: 3600000,  // 历史运行时间 // 毫秒
      highlightPoints: [{ // 错误点
        time: '2018-04-01 02:10',
      }],
    },
}
```

##### 欢迎提PR
