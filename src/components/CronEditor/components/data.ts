export const arr60 = Array.from(Array(60), (value,index) =>{
  return { label: index < 10 ? '0' + index : index, value: index }
})

export const arr31 = Array.from(Array(31), (value,index) =>{
  return { label: index < 10 ? '0' + index : index, value: index }
})

export const arr24 = Array.from(Array(24), (value,index) =>{
  return { label: index < 10 ? '0' + index : index, value: index }
})

export const arr12 = Array.from(Array(12), (value,index) =>{
  return { label: index + 1, value: index + 1 }
})

export const arr7 = Array.from(Array(7), (value,index) =>{
  return { label: index + 1, value: index + 1 }
})

export interface RadioItem {
  label: string;
  value: string;
}

export const SecondTypeList: RadioItem[] = [
  {
    label: '每秒',
    value: 'MM',
  },
  {
    label: '周期',
    value: 'ZQ',
  },
  {
    label: '循环',
    value: 'XH',
  },
  {
    label: '指定',
    value: 'ZD',
  },
];

export const MinuteTypeList: RadioItem[] = [
  {
    label: '每分',
    value: 'MF',
  },
  {
    label: '周期',
    value: 'ZQ',
  },
  {
    label: '循环',
    value: 'XH',
  },
  {
    label: '指定',
    value: 'ZD',
  },
];

export const HourTypeList: RadioItem[] = [
  {
    label: '每时',
    value: 'MS',
  },
  {
    label: '周期',
    value: 'ZQ',
  },
  {
    label: '循环',
    value: 'XH',
  },
  {
    label: '指定',
    value: 'ZD',
  },
];

export const DayTypeList: RadioItem[] = [
  {
    label: '每日',
    value: 'MR',
  },
  {
    label: '周期',
    value: 'ZQ',
  },
  {
    label: '循环',
    value: 'XH',
  },
  {
    label: '工作日',
    value: 'GZR',
  },
  {
    label: '本月最后一天',
    value: 'BYZHYT',
  },
  {
    label: '指定',
    value: 'ZD',
  },
  {
    label: '不指定',
    value: 'BZD',
  },
];

export const MonthTypeList: RadioItem[] = [
  {
    label: '每月',
    value: 'MY',
  },
  {
    label: '周期',
    value: 'ZQ',
  },
  {
    label: '循环',
    value: 'XH',
  },
  {
    label: '指定',
    value: 'ZD',
  },
  {
    label: '不指定',
    value: 'BZD',
  },
];

export const WeekTypeList: RadioItem[] = [
  {
    label: '每周',
    value: 'MZ',
  },
  {
    label: '周期',
    value: 'ZQ',
  },
  {
    label: '循环',
    value: 'XH',
  },
  {
    label: '指定周',
    value: 'ZDZ',
  },
  {
    label: '本月最后一个',
    value: 'BYZHYG',
  },
  {
    label: '指定',
    value: 'ZD',
  },
  {
    label: '不指定',
    value: 'BZD',
  },
];

export const YearTypeList: RadioItem[] = [
  {
    label: '每年',
    value: 'MN',
  },
  {
    label: '周期',
    value: 'ZQ',
  },
  {
    label: '不指定',
    value: 'BZD',
  },
];