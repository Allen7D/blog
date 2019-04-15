const fs = require('fs');
const path = require('path');
const express = require('express');
const chalk = require('chalk')
const app = express();
app.use(express.static(path.resolve(__dirname, './')))

app.get('/', function(req, res) {
  const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8')
  res.send(html)
})

app.listen(6001, res => {
  console.log(chalk.yellow('服务器正常启动运行 >>  localhost:6001'));
});
