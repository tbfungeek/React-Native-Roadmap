import {Effect, Model} from 'dva-core-ts';
import {Reducer} from 'redux';

//继承dva-core-ts 中的 Model 实现HomeModel接口
interface HomeModel extends Model {
  namespace: 'home';
  state: HomeState;
  reducers: {
    add: Reducer<HomeState>;
  };
  effects: {
    asyncAdd: Effect;
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
  effects: {
    *asyncAdd({payload}, {call, put}) {
      yield call(delay, 3000);
      yield put({
        type: 'add',
        payload,
      });
    },
  },
};

function delay(times: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, times);
  });
}

export default homeModel;
