import {Model} from 'dva-core-ts';
import {Reducer} from 'redux';

//继承dva-core-ts 中的 Model 实现HomeModel接口
interface HomeModel extends Model {
  namespace: 'home';
  state: HomeState;
  reducers: {
    add: Reducer<HomeState>;
  };
}

interface HomeState {
  num: number;
}

const homeModel: HomeModel = {
  namespace: 'home',
  state: {
    num: 0,
  },
  reducers: {
    add(state, {payload}) {
      return {
        ...state,
        num: state?.num + payload.num,
      };
    },
  },
};

export default homeModel;
