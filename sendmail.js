var nodemailer = require("nodemailer");

// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport("SMTP",{
    host: "mail.zjuhz.com",
    auth: {
        user: "server@zjuhz.com",
        pass: "1234567"
    }
});

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