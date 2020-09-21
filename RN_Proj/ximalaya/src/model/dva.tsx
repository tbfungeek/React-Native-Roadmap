import {create} from 'dva-core-ts';
import modules from '@/model/index';

//创建应用
const app = create();

//加载model
modules.forEach((model) => {
  app.model(model);
});

//启动dva
app.start();

//导出数据
export default app._store;
