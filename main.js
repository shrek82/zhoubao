var fs = require('fs');
var config = require('./config.js');
var nodemailer = require("nodemailer");

var group = {
    all: './group/all.txt',
    admin: './group/admin.txt'
};
console.log('--------------------------------------------------------');
console.log('请选择待发送的用户组：');
for (var k in group) {
    console.log('%s', k);
}
console.log('--------------------------------------------------------');

//异步读取文件
var file = fs.readFileSync(group['all'], "utf8");
var emails = file.split(/\r/);

console.log('大约' + emails.length + '份邮件待发送');