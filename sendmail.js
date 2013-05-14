var nodemailer = require("nodemailer");
var statrTime = new Date().getTime();

// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport("SMTP", {
    host: "mail.zjuhz.com",
    auth: {
        user: "majun@zjuhz.com",
        pass: "123456"
    }
});

// setup e-mail data with unicode symbols
var mailOptions = {
    from: "majun <majun@zjuhz.com>", // sender address
    to: "37294812@qq.com,37294812@qq.com,37294812@qq.com,37294812@qq.com,37294812@qq.com,37294812@qq.com,37294812@qq.com,37294812@qq.com,37294812@qq.com,37294812@qq.com,37294812@qq.com,37294812@qq.com,37294812@qq.com,37294812@qq.com,37294812@qq.com", // list of receivers
    subject: "Hello", // Subject line
    text: "Hello world", // plaintext body
    html: "<b>Hello world</b>" // html body
}
// send mail with defined transport object
smtpTransport.sendMail(mailOptions, function(error, response) {
    if (error) {
        console.log(error);
    } else {
        console.log("Message sent: " + response.message);
    }


    //运行结束后关闭进程
    smtpTransport.close();
});

console.log('run time:' + (new Date().getTime() - statrTime) / 1000 + 's');