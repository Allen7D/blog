module.exports = {
  title: 'Allen7D 技术笔记',
  description: '异象-追随-节制',
  port: 5050,
  // base: "/",
  dest: "./dist",
  head: [
    ['link', { rel: 'icon', href: '/headstand.jpg' }]
  ],
  themeConfig: {
    nav: [
      { text: '介绍', link: '/' },
      { text: '前端', items: [
        { text: '语义话', link: '/front-end/base' },
        { text: '优秀教程', link: '/front-end/tutorial' },
      ]},
      { text: '其他', items: [
        { text: '单词学习', link: '/extra/word' },
      ]},
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