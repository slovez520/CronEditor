<template>
  <div>
    <RadioGroup v-model:value="type" @change="valueChange">
      <Radio v-for="list in WeekTypeList" :value="list.value" :key="list.value">
        {{ list.label }}
      </Radio>
    </RadioGroup>

    <div class="typeSettring">
      <div class="setting-items mt-2" v-if="type == 'ZQ'">
        从星期 <InputNumber class="w160" :min="1" :max="7" v-model:value="zqStart" @change="valueChange"></InputNumber> 至星期 
        <InputNumber class="w160" :min="2" :max="7" v-model:value="zqEnd" @change="valueChange"></InputNumber>
      </div>
      <div class="setting-items mt-2" v-if="type == 'XH'">
        从星期 <InputNumber class="w160" :min="1" :max="7" v-model:value="xhStart" @change="valueChange"></InputNumber> 开始，每 
        <InputNumber class="w160" :min="1" :max="7" v-model:value="xhEnd" @change="valueChange"></InputNumber> 天执行一次
      </div>
      <div class="setting-items mt-2" v-if="type == 'ZDZ'">
        本月第 <InputNumber class="w160" :min="1" :max="4" v-model:value="zdzStart" @change="valueChange"></InputNumber> 周，星期 
        <InputNumber class="w160" :min="1" :max="7" v-model:value="zdzEnd" @change="valueChange"></InputNumber>
      </div>
      <div class="setting-items mt-2" v-if="type == 'BYZHYG'">
        星期 <InputNumber class="w160" :min="1" :max="7" v-model:value="byzhygValue" @change="valueChange"></InputNumber>
      </div>
      <div class="setting-items mt-2" v-if="type == 'ZD'">
        <CheckboxGroup v-model:value="zdValue" @change="valueChange">
          <template v-for="item in arr7" :key="item.value">
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
  import { WeekTypeList, arr7 } from './data';
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
      const type = ref('BZD');
      const zqStart = ref(1);
      const zqEnd = ref(2);
      const xhStart = ref(1);
      const xhEnd = ref(1);
      const zdzStart = ref(1);
      const zdzEnd = ref(1);
      const byzhygValue = ref(1);
      const zdValue = ref([]);

      function valueChange(){
        emit('change', {
          page: 'week',
          type: unref(type),
          zqStart: unref(zqStart),
          zqEnd: unref(zqEnd),
          xhStart: unref(xhEnd),
          xhEnd: unref(xhEnd),
          zdValue: unref(zdValue),
          zdzStart: unref(zdzStart),
          zdzEnd: unref(zdzEnd),
          byzhygValue: unref(byzhygValue),
        })
      }

      return {
        type,
        arr7,
        WeekTypeList,

        zqStart,
        zqEnd,
        
        xhStart,
        xhEnd,

        zdValue,
        byzhygValue,
        zdzStart,
        zdzEnd,

        valueChange
      };
    },
  });
</script>