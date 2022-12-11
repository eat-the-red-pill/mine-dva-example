import React, { useState, useEffect } from 'react';
import './style.css';

import axios from 'axios';
import $ from 'jquery';

export default function AppMock() {
  const [result, setResult] = useState('');
  useEffect(() => {
    // 借助 `axios` 模块发送`ajax`请求,通过`get()`获取接口路径下的数据
    axios
      .get('/list.json')
      .then((res) => {
        const data = res.data.list;
        const action = initListAction(data);
        // console.log(action);
        store.dispatch(action);
      })
      .catch(() => {
        alert('失败');
      });
  }, []);

  const handleOnClick = () => {
    axios({
      url: '/api/login/account',
      data: {
        username: 'admin',
        password: '123456',
      },
      method: 'post',
    }).then((res) => {
      console.log(res);
      if (res.data.status === 'ok') {
        props.history.push('/index');
      } else if (res.data.status === 'error') {
        alert('用户名密码错误');
      }
    });
  };
  return (
    <div className="AppMock">
      <button onClick={handleOnClick}>handleOnClick</button>
      <div>结果：</div>
      <div>{result}</div>
    </div>
  );
}
