<template>
  <div>
    <RadioGroup v-model:value="type" @change="valueChange">
      <Radio v-for="list in HourTypeList" :value="list.value" :key="list.value">
        {{ list.label }}
      </Radio>
    </RadioGroup>

    <div class="typeSettring">
      <div class="setting-items mt-2" v-if="type == 'ZQ'">
        从 <InputNumber class="w160" :min="0" :max="23" v-model:value="zqStart" @change="valueChange"></InputNumber> 至 
        <InputNumber class="w160" :min="2" :max="23" v-model:value="zqEnd" @change="valueChange"></InputNumber> 时
      </div>
      <div class="setting-items mt-2" v-if="type == 'XH'">
        从 <InputNumber class="w160" :min="0" :max="23" v-model:value="xhStart" @change="valueChange"></InputNumber> 时开始，每 
        <InputNumber class="w160" :min="1" :max="23" v-model:value="xhEnd" @change="valueChange"></InputNumber> 时执行一次
      </div>
      <div class="setting-items mt-2" v-if="type == 'ZD'">
        <CheckboxGroup v-model:value="zdValue" @change="valueChange">
          <template v-for="item in arr24" :key="item.value">
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
  import { HourTypeList, arr24 } from './data';
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
      const type = ref('MS');
      const zqStart = ref(0);
      const zqEnd = ref(2);
      const xhStart = ref(0);
      const xhEnd = ref(1);
      const zdValue = ref([]);

      function valueChange(){
        emit('change', {
          page: 'hour',
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
        arr24,
        HourTypeList,

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