import React from 'react';
import dva from 'dva';

// 1. Initialize
const app = dva();
console.log('dva: ', app);

//==============================================================
// 2. Model
//在Umi框架会自动app.model添加所有models文件夹下的models.js数据模型文件
import models4cnt from './models/countModelNamespace';
import models4cntAbb from './models/countAbbreviation';

app.model(models4cnt);
app.model(models4cntAbb);
/** 只有一个数值的时候可以缩写,Umi dva帮我们把/src/models文件夹下的文件无脑添加到全局app.mdel(中)。
app.model(require('./models/a1').default);
app.model(require('./models/a2').default);
*/

//==============================================================
import App1 from './App1';
// mock
import './mock/testApis';
import AppMock from './MockTest';

// 4. Router
app.router(() => (
  <div>
    <App1 />
    {/* <AppMock /> */}
  </div>
));

// 5. Start
app.start('#root');
