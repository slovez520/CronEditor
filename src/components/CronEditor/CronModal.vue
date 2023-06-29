<template>
  <div>
    <Tabs @change="tabsChange">
      <template v-for="item in tabsList" :key="item.key">
        <TabPane :tab="item.name">
          <component :is="item.component" @change="handleChange"/>
        </TabPane>
      </template>
    </Tabs>

    <Table style="margin:10px 0;" :bordered="true" :columns="columns" :dataSource="tableData" :pagination="false"></Table>

    <div class="nextRunTime">
      <div>下次运行时间：</div>
      <div v-for="item in nextTimes" :key="item">{{ item }}</div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { Tabs, Table, message } from 'ant-design-vue';
  import { tabsList, columns } from './data';

  import Second from './components/Second.vue';
  import Minute from './components/Minute.vue';
  import Hour from './components/Hour.vue';
  import Day from './components/Day.vue';
  import Month from './components/Month.vue';
  import Week from './components/Week.vue';
  import Year from './components/Year.vue';

  export default defineComponent({
    name: 'CronModal',
    components: {
      Tabs,
      Table,
      TabPane: Tabs.TabPane,

      Second,
      Minute,
      Hour,
      Day,
      Month,
      Week,
      Year
    },
    emits: ['update:cron'],
    setup(_, { emit }) {
      const nextTimes = ref<string[]>([]);
      const curTab = ref('秒');

      const tableData = ref([
        { second: '*', minute: '*', hour: '*', day: '*', month: '*', week: '?', year: '*' },
        { second: '每秒', minute: '每分', hour: '每时', day: '每天', month: '每月', week: '', year: '每年' }
      ])

      function tabsChange(val){
        curTab.value = val
      }

      async function computedDate(){
        let rows = [...unref(tableData)]
        
        let res = rows.map(item =>{
          return {
            second: item.second,
            minute: item.minute,
            hour: item.hour,
            day: item.day,
            month: item.month,
            week: item.week,
            year: item.year,
          }
        })

        let cron = ''
        Object.values(res[0]).forEach(k=>{
          cron += cron ? ` ${k}` : `${k}`
        })
        // console.log('cron', cron)

        // 获取下次运行时间
        if(cron ===  '* * * * * * *') return

        // nextTimes.value = await NextTriggerTime({ scheduleType: 'CRON', scheduleConf: cron })
      }

      async function handleChange(data:any) {
        let rows = [...unref(tableData)]
        let name = unref(curTab)
        let value = '*'
        let desc = `每${name}`

        if(data.page == 'day') {
          if(data.type == 'BZD' && rows[0].week == '?') {
            message.warning('周和日只能有一个为不指定！')
            return
          }
          if(data.type != 'BZD' && rows[0].week != '?') {
            message.warning('周和日必须有一个为不指定！')
            return
          }
        }
        if(data.page == 'week') {
          if(data.type == 'BZD' && rows[0].day == '?') {
            message.warning('周和日只能有一个为不指定！')
            return
          }
          if(data.type != 'BZD' && rows[0].day != '?') {
            message.warning('周和日必须有一个为不指定！')
            return
          }
        }
        
        switch(data.type) {
          case 'ZQ':
            value = `${data.zqStart}-${data.zqEnd}`
            desc = `${data.zqStart}至${data.zqEnd}${name}`
            break;
          case 'XH':
            value = `${data.xhStart}/${data.xhEnd}`
            desc = `${data.xhStart}${name}开始，每${data.xhEnd}${name}`
            break;
          case 'ZD':
            if(data.zdValue.length > 0) {
              let values = data.zdValue.map(item=> {
                return item > 9 ? item : '0' + item
              })
              value = `${values.toString()}`
              desc = `[${values.toString()}]${name}`
            }
            break;
          case 'GZR':
            value = `${data.gzrValue}W`
            desc = `第${data.gzrValue}号最近的工作日`
            break;
          case 'BZD':
            value = '?'
            break;
          case 'BYZHYT':
            value = 'L'
            desc = '本月最后一天'
            break;
          case 'ZDZ':
            value = `${data.zdzStart}#${data.zdzEnd}`
            desc = '本月第${data.zdzStart}周，星期${data.zdzEnd}开始'
            break;
          case 'BYZHYG':
            value = `${data.byzhygValue}L`
            desc = `本月最后一个星期${data.byzhygValue}开始`
            break;
        }
        tableData.value[0][data.page] = value
        tableData.value[1][data.page] = desc
        computedDate()
        emit('update:cron', unref(tableData))
      }

      return {
        tabsChange,
        handleChange,

        tabsList,
        curTab,
        nextTimes,
        columns,
        tableData
      };
    }
  })
</script>