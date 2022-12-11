export default {
  namespace: 'countModelNamespace',
  state: {
    count: 0,
  },
  reducers: {
    // 根据state改变UI的普通函数,payload是载荷
    add(state, { payload }) {
      const { count } = state;
      return {
        ...state,
        count: count + 1,
      };
    },
    minus(state, { payload }) {
      const { count } = state;
      return {
        ...state,
        count: count - 1,
      };
    },
  },
};
