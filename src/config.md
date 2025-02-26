---
aside: false
lastUpdated: false
---

<div class="warp">
  <div
    class="item"
    v-for="({ title, configList }, index) in data"
    :key="index">
    <div class="title">{{ title }}</div>
    <ul class="config">
      <li v-for="info in configList" :key="info">{{ info }}</li>
    </ul>
  </div>
</div>

<script setup>
import { reactive } from 'vue'

const data = reactive([
  {
    title: '台式机',
    configList: [
      'CPU: 12代i5 12600kf',
      '显卡: -',
      '主板: 迫击炮',
      '固态硬盘: -',
      '内存条: -',
      '电源: -',
      '散热: -',
      '机箱: -'
    ]
  },
  {
    title: '笔记本',
    configList: ['华硕飞行堡垒']
  }
])
</script>

<style lang="scss">
  .warp {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }
  .item {
    .title {
      font-size: 20px;
      font-weight: bolder;
    }
  }
</style>
