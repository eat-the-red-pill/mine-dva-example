import Mock from 'mockjs';

let data_success = {
  status: 'ok', //表示账号密码正确，登录成功
};

let data_error = {
  status: 'error', //表示账号密码错误，登录失败
};

export default Mock.mock(
  '/api/login/account',
  'post',
  (req) => {
    console.log(req);
    let req_data = JSON.parse(req.body);
    if (req_data.username == 'admin' && req_data.password == '123456') {
      return data_success;
    }
    return data_error;
  },
  '/list.json',
  {
    // 随机生成长度为3的list数组，数组元素是3-10个字范围内的中文单词
    'list|3': ['@cword(3,10)'],
  },
  '/api/mock/getMarkdownDocsText',
  {
    remotedMarkdownText: '# title,$a^2$+b^2=c^2. balabala...',
  }
);
