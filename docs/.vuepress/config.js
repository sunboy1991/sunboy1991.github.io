const { fs, path } = require('@vuepress/shared-utils')
// const fs = require('fs')
// const path = require('path')

module.exports = ctx => ({
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'FrontEnd Docs',
      description: '前端绿书'
    },
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  theme: '@vuepress/theme-default',
  themeConfig: {
    editLinks: false,
    docsDir: 'docs/docs',
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: "选择语言",
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: require('./nav/zh'),
        sidebar: {
          '/Develop/': getStandardSidebar('Develop'),
          '/Client/': getStandardSidebar('Client'),
          '/Engineering/': getMainSideBar('Engineering'),
          '/Graphical/': getStandardSidebar('Graphical'),
        }
      }
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    // ['@vuepress/medium-zoom', true],
    // ['@vuepress/google-analytics', {
    //   ga: 'UA-128189152-1'
    // }],
    ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>',
    }],
    ['container', {
      type: 'upgrade',
      before: info => `<UpgradePath title="${info}">`,
      after: '</UpgradePath>',
    }],
  ],
  extraWatchFiles: [
    '.vuepress/nav/zh.js'
  ]
})

function getStandardSidebar(type) {
  let dir = fs.readdirSync(path.resolve(__dirname, '../' + type)).filter(name => !name.includes('.md'))
  return dir.map(name => {
    let share = fs.readdirSync(path.resolve(__dirname, '../' + type + '/' + name + '/share'))
    
    return {
      title: name.replace(/^.-/, ''),
      collapsable: true,
      children: [
        name + '/standard',
        name + '/best-practices',
        ...share.map(filename => name + '/share/' + filename.slice(0, -3))
      ]
    }
  })
}

function getMainSideBar(type) {
  let dir = fs.readdirSync(path.resolve(__dirname, '../' + type)).filter(name => !name.includes('.md'))
  return dir.map(name => {
    let sub = fs.readdirSync(path.resolve(__dirname, '../' + type + '/' + name))
 console.log(sub)
    return {
      title: name.replace(/^.-/, ''),
      collapsable: true,
      children: [
        ...sub.map(filename => name + '/' + filename.slice(0, -3))
      ]
    }
  })
}
