import moment from 'moment';

export const getNodeNormalStatus = node => {
  return (moment(node.value.endTime).valueOf() - moment(node.value.startTime).valueOf()) >= node.averageValue;
};