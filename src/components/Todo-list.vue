<template>
  <div class="container">
    <h1 class="title">{{ title }}</h1>
    <ol>
      <li
        v-for="{ name, desc, progress } in data"
        :key="name"
        class="todo-item">
          {{ name }}
          <div v-if="desc" class="desc">{{ desc }}</div>
          <div class="tooltip">
            <div class="icon" :style="getStyle(progress)"></div>
            <div v-if="isShowProgess" class="progress">{{ getProgress(progress) }}</div>
          </div>
      </li>
    </ol>
  </div>
</template>
<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

interface IItem {
  name: string
  desc?: string
  progress: number
}

interface IProps {
  title?: string
  data: IItem[],
  isShowProgess?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  title: 'Todo List',
  isShowProgess: true
})

const getStyle = (value: number) => {
  const percentage = `${value / 1 * 100}%`
  return value < 1
    ? {
        color: 'var(--gray)',
        'background-image': `conic-gradient(var(--gray) ${percentage}, transparent ${percentage})`
    }
    : {
      color: 'var(--success)',
        'background-image': `conic-gradient(var(--success) ${percentage}, transparent ${percentage})`
    }
}

const getProgress = (value: number) => {
  return `${value / 1 * 100}%`
}
</script>
<style scoped lang="scss">
  .container {
    --gray: rgba(0,0,0,.36);
    --gray-bg: #f7f7f7;
    --success: #00b365;
    max-width: max-content;
    .title {
      text-align: center;
    }
    .todo-item {
      display: flex;
      align-items: center;
      margin-top: 16px;
      font-size: 18px;
    }
    .tooltip {
      display: flex;
      align-items: center;
    }
    .desc {
      height: 22px;
      line-height: 22px;
      padding: 0 8px;
      margin-right: 8px;
      font-size: 12px;
      border-radius: 3px;
      border: 1px solid #e8eaec;
      background-color: var(--gray-bg);
    }
    .icon {
      width: 18px;
      height: 18px;
      padding: 2px;
      margin-right: 8px;
      border: 1px solid;
      border-radius: 50%;
      background-clip: content-box;
    }
    .progress {
      font-size: 16px;
    }
  }
</style>