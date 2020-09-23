import {create} from 'dva-core-ts';
import modules from '@/model/index';
import createLoading from 'dva-loading-ts';
import createLogger from 'dva-logger';

//创建应用
const app = create();

//加载model
modules.forEach((model) => {
  app.model(model);
});

app.use(createLoading());
app.use(createLogger());

//启动dva
app.start();

//导出数据
export default app._store;
