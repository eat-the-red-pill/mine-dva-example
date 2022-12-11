export async function getMarkdownDocs(params) {
  //
  let { mdfilename } = params;
  const query = params ? '?' + mdfilename : '';
  return request(
    'http://localhost.huawei.com:3000/api/biz/mock/getMarkdownDocsText'
  );
  return request(apiPrefix + '/api/getMarkdownDocsText' + query);
}
