import AV from 'leancloud-storage';

const APP_ID = 'hygtuQLi8CXoJ6MhLLoq9uMc-gzGzoHsz';
const APP_KEY = 'TunYLMWh7jWc62GVAa4B4kJQ';
const SERVER_URL = 'https://console.leancloud.cn/apps/hygtuQLi8CXoJ6MhLLoq9uMc-gzGzoHsz';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY,
  serverURL: SERVER_URL,
});

export default AV;
