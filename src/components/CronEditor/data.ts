import { BasicColumn } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    dataIndex: 'second',
    title: '秒',
    width: 100,
    align: 'left',
  },
  {
    dataIndex: 'minute',
    key: 'minute',
    title: '分',
    width: 100,
    align: 'left',
  },
  {
    dataIndex: 'hour',
    title: '时',
    width: 100,
    align: 'left',
  },
  {
    dataIndex: 'day',
    title: '日',
    width: 100,
    align: 'left',
  },
  {
    dataIndex: 'month',
    title: '月',
    width: 100,
    align: 'left',
  },
  {
    dataIndex: 'week',
    title: '周',
    width: 100,
    align: 'left',
  },
  {
    dataIndex: 'year',
    title: '年',
    width: 100,
    align: 'left',
  },
];

export interface TabItem {
  key: string;
  name: string;
  component: string;
}

export const tabsList: TabItem[] = [
  {
    key: '秒',
    name: '秒',
    component: 'Second',
  },
  {
    key: '分',
    name: '分',
    component: 'Minute',
  },
  {
    key: '时',
    name: '时',
    component: 'Hour',
  },
  {
    key: '日',
    name: '日',
    component: 'Day',
  },
  {
    key: '月',
    name: '月',
    component: 'Month',
  },
  {
    key: '周',
    name: '周',
    component: 'Week',
  },
  {
    key: '年',
    name: '年',
    component: 'Year',
  },
];