---
title: 规划
aside: false
---

<todo-list :class="$style['todo-list']" :data="todoList" />

<script setup lang="ts">
import { reactive } from 'vue'
import TodoList from '../components/Todo-list.vue'

const todoList = reactive([
  {
    name: '重学 GIT。',
    desc: '被最近的冲突搞破防了，感觉自己不会 git 了',
    progress: 1
  },
  {
    name: '学习 MySQL。',
    progress: 0.2
  },
  {
    name: '服务端渲染 SSR。',
    desc: 'Nuxtjs/Nextjs',
    progress: 0
  },
  {
    name: 'Three.js',
    progress: 0
  },
  {
    name: 'Nodejs。',
    progress: 0
  },
  {
    name: 'Jest',
    progress: 0
  }
])
</script>

<style module>
  .todo-list {
    margin: 0 auto;
  }
</style>
