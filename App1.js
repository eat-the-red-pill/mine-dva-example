import React from 'react';
import { connect } from 'dva';
import './style.css';
//==============================================================
// 3. View
// 需要函数返回值吐出来一个JSX，所以需要圆括号。花括号在外面的话意味着这个箭头函数没有省略函数体部分，则需要return。
const TheMethod_mapProps2UI = function (props) {
  console.log('props:', props);
  return (
    <div>
      <h2>{props.countModelNamespace.count}</h2>
      {/* connect之后可以直接用 props.countModelNamespace 的count 变量*/}
      <button
        key="add"
        onClick={() => {
          props.dispatch({ type: 'countModelNamespace/add' }); // dispatch方法有{type,payload}，这里payload为空零参数函数，直接调用前文count命名空间的add方法。
        }}
      >
        +
      </button>
      <button
        key="minus"
        onClick={() => {
          props.dispatch({ type: 'countModelNamespace/minus' });
        }}
      >
        -
      </button>
      {/* <TestError /> */}
    </div>
  );
};
//项目中的写法是把对应命名空间的键值对直接挂载到props同名的键值对上。
// 比如把 rulechain.js和user.js的models中定义的数据 ：rulechain, user。
// 挂载到 TheMethod_mapProps2UI 组件上，一般在"TheMethod_mapProps2UI.js"文件中
// const mapStateToProps = ({ count }) => ({ count });
// const mapStateToProps = ({ count }) => {return { count }};
// const mapStateToProps = ({ count }) => {return ({ count })};
// function mapStateToProps({ count }){return ({count})};
function mapStateToProps(globalModels) {
  console.log('globalModels:', globalModels);
  const { countModelNamespace } = globalModels;
  return { countModelNamespace };
}
// 等价写法,就是项目中的常见写法：
/*
const mapStateToProps = ({ countModelNamespace }) => ({
  countModelNamespace,
});
*/
//const mapStateToProps =
//    ({ rulechain, user }) => ({ rulechain, user });
const App1 = connect(mapStateToProps)(TheMethod_mapProps2UI);
export default App1;
