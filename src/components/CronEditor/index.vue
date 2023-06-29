<template>
  <div>
    <div class="select-tag" @click="handleSelector">
      <div v-if="name">{{ name }}</div>
      <span v-else class="placeholder" >请选择</span>
    </div>

    <Modal v-model:visible="visible" width="60%" title="Cron编辑器" @ok="handleSuccess">
      <CronModal v-model:cron="cronData"/>
    </Modal>
  </div>
</template>
<script lang="ts" setup>
  import { ref, watch } from 'vue';
  import CronModal from './CronModal.vue';
  import { Modal } from 'ant-design-vue';

  const emit = defineEmits(['success', 'update:value'])
  const props = defineProps({
    value: {
      type: String,
      default: '',
    },
  })

  const name = ref();
  const cronData = ref<any>([]);
  const visible = ref(false);

  watch(
    () => props.value,
    (value = '') => {
      name.value = value ? value : '';
    },
    { immediate: true },
  );

  function handleSelector() {
    visible.value = true
  }

  function handleSuccess() {
    console.log(cronData.value)
    let res = cronData.value.map((item:any) =>{
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
    let value = Object.values(res[0]).toString().replace(/,/g, ' ')
    let desc = '从' + Object.values(res[1]).reverse().toString().replace(/,/g, '') + '执行一次'
    name.value = value
    emit('success', {value, desc});
    emit('update:value', value);
    visible.value = false
  }
</script>
