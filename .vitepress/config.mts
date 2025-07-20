import { defineConfig } from 'vitepress'
import navbar from '../navbar'
import sidebar from '../sidebar'

export default defineConfig({
  title: '在线文档',
  description: '记录自己在日常开发和技术扩展上的一些问题和笔记等等',
  base: '/docs/',
  cleanUrls: true,
  srcDir: './src',
  head: [['link', { rel: 'icon', href: '/docs/favicon.ico' }]],
  appearance: 'dark',
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    logo: '/logo.png',
    nav: navbar,
    sidebar: sidebar,
    outline: {
      label: '页面导航',
    },
    search: {
      provider: 'local',
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/caocaoDeng' }],
    lastUpdated: {
      text: '最近更新',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short',
      },
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
  },
})
