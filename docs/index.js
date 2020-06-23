const fs = require('fs')
const path = require('path')

const log = console.log

let dir = fs.readdirSync(path.resolve(__dirname, './Develop')).filter(name => !name.includes('.md'))

// dir = dir.filter(name => !name.includes('.md'))

// log(dir)

let conf = dir.map(name => {
  let shareDirPath = path.resolve(__dirname, './Develop' + '/' + name + '/share');
  if(!fs.existsSync(shareDirPath)){
    fs.mkdirSync(shareDirPath);
  }
  let share = fs.readdirSync(shareDirPath)
  
  return {
    title: name,
    collapsable: true,
    children: [
      ['', '标准'],
      'standard',
      'best-practices',
      ['', '分享'],
      ...share.map(filename => 'share/' + filename.slice(0, -3))
    ]
  }
})

log(conf, JSON.stringify(conf))

// 1. 2. 4 可用