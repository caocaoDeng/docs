import { defineConfig } from 'vitepress'
import navbar from '../navbar'
import sidebar from '../sidebar'

export default defineConfig({
  title: 'Deng·草草的文档',
  description: '记录自己在日常开发和技术扩展上的一些问题和笔记等等',
  base: '/docs/',
  cleanUrls: true,
  srcDir: './src',
  // appearance: 'force-dark',
  themeConfig: {
    logo: '/logo.png',
    nav: navbar,
    sidebar: sidebar,
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/caocaoDeng' }
    ]
  }
})
