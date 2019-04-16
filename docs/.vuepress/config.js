module.exports = {
  title: 'Allen7D 技术笔记',
  description: '技术笔记',
  port: 5050,
  // base: "/",
  dest: "./dist",
  head: [
    ['link', { rel: 'icon', href: '/headstand.jpg' }]
  ],
  themeConfig: {
    nav: [
      { text: '介绍', link: '/' },
      { text: '前端', link: '/front-end/base' },
      { text: 'GitHub', link: 'https://github.com/Allen7D/blog' },
    ],
    sidebarDepth: 2, // 侧边栏显示 h2 和 h3 标题
    lastUpdated: 'Last Updated'
  },
  serviceWorker: true,
  markdown: {
    lineNumbers: true
  }
}