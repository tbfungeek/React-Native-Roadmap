import {Effect, Model} from 'dva-core-ts';
import {Reducer} from 'redux';
import axios from 'axios';

const CarouselURL = '/mock/11/ximalaya/carousel';

//继承dva-core-ts 中的 Model 实现HomeModel接口
interface HomeModel extends Model {
  namespace: 'home';
  state: HomeState;
  reducers: {
    setState: Reducer<HomeState>;
  };
  effects: {
    fetchCarousel: Effect;
  };
}

export interface ICarousel {
  id: string;
  image: string;
  colors: [string, string];
}

export interface HomeState {
  carousel: ICarousel[];
}

const initialState = {
  carousel: [],
};

const homeModel: HomeModel = {
  namespace: 'home',
  state: initialState,
  reducers: {
    setState(state, {payload}) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    *fetchCarousel(_, {call, put}) {
      console.log('[LXH][开始请求轮播图数据.....]');
      const {data} = yield call(axios.get, CarouselURL);
      console.log('[LXH][返回轮播数据.....]', data);
      yield put({
        type: 'setState',
        payload: {
          carousel: data,
        },
      });
    },
  },
};

export default homeModel;
