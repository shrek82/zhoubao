var fs = require('fs');
var config = require('./config.js');
var nodemailer = require("nodemailer");

var group = {
	all: './group/all.txt',
	admin: './group/admin.txt'
};
console.log(group.length);
for(var k in group) {
	console.log('------------------------------------');
	console.log('请选择待发送的用户组：');
	console.log('%s',k);
	console.log('------------------------------------');
}
//异步读取文件
var file = fs.readFileSync(group['all'], "utf8");
var emails=file.split(/\r/);

console.log('大约'+emails.length+'份邮件待发送');

//创建发送组件
var smtpTransport = nodemailer.createTransport("SMTP",config.server);

// setup e-mail data with unicode symbols
var mailOptions = {
    from: "server <server@zjuhz.com>", // sender address
    to: "37294812@qq.com", // list of receivers
    subject: "Hello", // Subject line
    text: "Hello world", // plaintext body
    html: "<b>Hello world</b>" // html body
}

// send mail with defined transport object
smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }

    // if you don't want to use this transport object anymore, uncomment following line
    //smtpTransport.close(); // shut down the connection pool, no more messages
});

var fs = require('fs');
var file = fs.readFileSync(path, "utf8");
console.log(file);