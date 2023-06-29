<template>
  <div>
    <RadioGroup v-model:value="type" @change="valueChange">
      <Radio v-for="list in MonthTypeList" :value="list.value" :key="list.value">
        {{ list.label }}
      </Radio>
    </RadioGroup>

    <div class="typeSettring">
      <div class="setting-items mt-2" v-if="type == 'ZQ'">
        从 <InputNumber class="w160" :min="1" :max="12" v-model:value="zqStart" @change="valueChange"></InputNumber> 至 
        <InputNumber class="w160" :min="2" :max="12" v-model:value="zqEnd" @change="valueChange"></InputNumber> 月
      </div>
      <div class="setting-items mt-2" v-if="type == 'XH'">
        从 <InputNumber class="w160" :min="1" :max="12" v-model:value="xhStart" @change="valueChange"></InputNumber> 月开始，每 
        <InputNumber class="w160" :min="1" :max="12" v-model:value="xhEnd" @change="valueChange"></InputNumber> 月执行一次
      </div>
      <div class="setting-items mt-2" v-if="type == 'ZD'">
        <CheckboxGroup v-model:value="zdValue" @change="valueChange">
          <template v-for="item in arr12" :key="item.value">
            <Checkbox :value="item.value">
              {{ item.label }}
            </Checkbox>
          </template>
        </CheckboxGroup>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { MonthTypeList, arr12 } from './data';
  import { Radio, Checkbox, InputNumber } from 'ant-design-vue';
  
  export default defineComponent({
    name: 'hour',
    components: {
      Radio,
      RadioGroup: Radio.Group,
      Checkbox,
      CheckboxGroup: Checkbox.Group,
      InputNumber
    },
    emits: ['change',],
    setup(_, { emit }) {
      const type = ref('MY');
      const zqStart = ref(1);
      const zqEnd = ref(2);
      const xhStart = ref(1);
      const xhEnd = ref(1);
      const zdValue = ref([]);

      function valueChange(){
        emit('change', {
          page: 'month',
          type: unref(type),
          zqStart: unref(zqStart),
          zqEnd: unref(zqEnd),
          xhStart: unref(xhEnd),
          xhEnd: unref(xhEnd),
          zdValue: unref(zdValue),
        })
      }

      return {
        type,
        arr12,
        MonthTypeList,

        zqStart,
        zqEnd,
        
        xhStart,
        xhEnd,

        zdValue,

        valueChange
      };
    },
  });
</script>