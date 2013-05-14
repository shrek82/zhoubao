//邮件发送服务器配置
exports.server = {
	host: 'mail.zjuhz.com',
	auth: {
		user: 'majun@zjuhz.com',
		pass: '123456'
	};
}
//用户组及对应的名单
exports.group = {
	'all': './group/all.txt',
	'admin': './group/admin.txt'
};
//其他嘛，再想想吧
exports.test = function() {
	console.log('ssssss');
}