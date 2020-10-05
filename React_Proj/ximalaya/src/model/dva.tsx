import {create, Model} from 'dva-core-ts';
import modules from '@/model/index';
import createLoading from 'dva-loading-ts';
import createLogger from 'dva-logger';
import modelExtend from 'dva-model-extend';
import homeModel from './home';

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

interface Cached {
  [key: string]: boolean;
}
const cached: Cached = {
  home: true,
};

function registerModel(model: Model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = true;
  }
}

export function createHomeModel(namespace: string) {
  const model = modelExtend(homeModel, {
    namespace: namespace ? namespace : 'home',
  });
  registerModel(model);
}
