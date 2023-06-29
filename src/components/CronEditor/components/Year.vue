<template>
  <div>
    <RadioGroup v-model:value="type" @change="valueChange">
      <Radio v-for="list in YearTypeList" :value="list.value" :key="list.value">
        {{ list.label }}
      </Radio>
    </RadioGroup>

    <div class="typeSettring">
      <div class="setting-items mt-2" v-if="type == 'ZQ'">
        从 <InputNumber class="w160" :min="2024" :max="2099" v-model:value="zqStart" @change="valueChange"></InputNumber> 至 
        <InputNumber class="w160" :min="2024" :max="2099" v-model:value="zqEnd" @change="valueChange"></InputNumber> 年
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { YearTypeList } from './data';
  import { Radio, Checkbox, InputNumber } from 'ant-design-vue';
  
  export default defineComponent({
    name: 'yaer',
    components: {
      Radio,
      RadioGroup: Radio.Group,
      Checkbox,
      CheckboxGroup: Checkbox.Group,
      InputNumber
    },
    emits: ['change',],
    setup(_, { emit }) {
      const type = ref('MN');
      const zqStart = ref(2024);
      const zqEnd = ref(2025);

      function valueChange(){
        emit('change', {
          page: 'year',
          type: unref(type),
          zqStart: unref(zqStart),
          zqEnd: unref(zqEnd),
        })
      }

      return {
        type,
        YearTypeList,

        zqStart,
        zqEnd,
        valueChange
      };
    },
  });
</script>