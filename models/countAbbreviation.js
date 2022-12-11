export default {
  namespace: 'countAbbreviation',
  state: 0,
  reducers: {
    // 根据state改变UI的普通函数
    add(count) {
      return count + 1;
    },
    minus(count) {
      return count - 1;
    },
  },
};
