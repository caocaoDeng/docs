---
title: 规划
aside: false
pageClass: todo-list
---

# Todo List

<ol>
    <li v-for="item in todoList" :key="item.label">
        {{ item.label }}
        <div class="tooltip">
            <div class="status" :style="getStyle(item.status)">
            </div>
            <div class="text">{{ value2Text(item.status) }}</div>
        </div>
    </li>
</ol>

<script setup lang="ts">
    import { reactive, computed } from 'vue'

    enum status {
        NOTSTART = '未开始',
        PENDING = '进行中',
        COMPLETE = '完成'
    }

    const todoList = reactive([
        {
            label: '重学 GIT(被最近的冲突搞破防了，感觉自己不会 git 了)。',
            status: 0
        },
        {
            label: '学习 MySQL。',
            status: 0.2
        },
        {
            label: '服务端渲染 SSR(nuxt/next)。',
            status: 0.9
        },
        {
            label: 'Nodejs。',
            status: 1
        }
    ])

    const getStyle = (value: number) => {
        const percentage = `${value / 1 * 100}%`
        return value < 1
            ? {
                border: '1px solid rgba(0,0,0,.36)',
                'background-image': `conic-gradient(rgba(0,0,0,.36) ${percentage}, transparent ${percentage})`
            }
            : {
                border: '1px solid #00b365',
                'background-image': `conic-gradient(#00b365 ${percentage}, transparent ${percentage})`
            }
    }

    const value2Text = (value: number) => {
        if (!value) return status.NOTSTART
        if (value < 1) return status.PENDING
        return status.COMPLETE
    }
</script>
<style scoped>
    .todo-list>>>.content {
        max-width: max-content !important;
    }
    .tooltip {
        display: inline-block;
    }
    .status {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        padding: 2px;
        background-clip: content-box;
    }
</style>
