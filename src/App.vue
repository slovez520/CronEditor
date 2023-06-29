<template>
  <div>
    <CronEditor v-model:value="cron"></CronEditor>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import CronEditor from './components/CronEditor/index.vue';
  const cron = ref('');
</script>

<style lang="less">
.mt-2 { margin-top:10px; }
.select-tag { display:flex; min-width: 200px; align-items: center; justify-content: space-between; padding: 4px 6px; line-height: 22px; border: 1px solid #d9d9d9; cursor: pointer;
    .placeholder,.app-iconify { color:#bbb; margin-left:5px; }
    .ant-tag { margin-right:5px !important; margin-bottom:2px; margin-top:2px; }
}
</style>
