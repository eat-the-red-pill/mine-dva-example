export default {
  namespace: 'mockMarkdownGet',
  state: {
    receivedMarkdownDocsText: 'placehold',
  },
  reducers: {
    *getMarkdownDocs({ payload }, { call, put }) {
      const resp = yield call(getMarkdownDocs, payload);
      if (resp) {
        yield put({
          type: 'setData',
          payload: {
            receivedMarkdownDocsText: resp.remotedMarkdownDocsText,
          },
        }); // mock返回的是对象，resp.statusCode暂时undefined
        // if (resp.statusCode === '0000') {
        //   yield put({
        //     type: 'setData',
        //     payload: {
        //       receivedMarkdownDocsText: resp.remotedMarkdownDocsText,
        //     },
        //   });
        // } else {
        //   comm.submitError(resp.message);
        // }
      } else {
        comm.submitError('获取Markdown帮助文本失败');
      }
    },
  },
};
