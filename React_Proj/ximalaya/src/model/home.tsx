import {Effect, Model} from 'dva-core-ts';
import {Reducer} from 'redux';
import axios from 'axios';

const CarouselURL = '/mock/11/ximalaya/carousel';
const GuessWhatYouLikeURL = '/mock/11/ximalaya/guess';
const ChannelListUrl = '/mock/11/ximalaya/channel';

//继承dva-core-ts 中的 Model 实现HomeModel接口
interface HomeModel extends Model {
  namespace: 'home';
  state: HomeState;
  reducers: {
    setState: Reducer<HomeState>;
  };
  effects: {
    fetchCarousel: Effect;
    fetchGuess: Effect;
    fetchChannelList: Effect;
  };
}

export interface ICarousel {
  id: string;
  image: string;
  colors: [string, string];
}

export interface IGuess {
  id: string;
  image: string;
  title: string;
}

export interface IChannel {
  id: string;
  image: string;
  title: string;
  played: number;
  playing: number;
  remark: string;
}

export interface HomeState {
  carousel: ICarousel[];
  guess: IGuess[];
  channelList: IChannel[];
}

const initialState = {
  carousel: [],
  guess: [],
  channelList: [],
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
    *fetchGuess(_, {call, put}) {
      console.log('[LXH][开始请求猜你喜欢数据.....]');
      const {data} = yield call(axios.get, GuessWhatYouLikeURL);
      console.log('[LXH][返回猜你喜欢数据.....]', data);
      yield put({
        type: 'setState',
        payload: {
          guess: data,
        },
      });
    },
    *fetchChannelList(_, {call, put}) {
      console.log('[LXH][开始请求频道列表数据......]');
      const {data} = yield call(axios.get, ChannelListUrl);
      console.log('[LXH][返回频道列表]', data);
      yield put({
        type: 'setState',
        payload: {
          channelList: data.results,
        },
      });
    },
  },
};

export default homeModel;
