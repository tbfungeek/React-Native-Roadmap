import {Effect, Model} from 'dva-core-ts';
import {Reducer} from 'redux';
import axios from 'axios';
import {RootState} from '@/model/index';

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
  pageInfo: IPageInfo;
}

interface IPageInfo {
  page: number;
  results: number;
  hasMore: boolean;
}

export interface HomeState {
  carousel: ICarousel[];
  guess: IGuess[];
  channelList: IChannel[];
  pageInfo: IPageInfo;
  activeCarouselIndex: number;
}

const initialState = {
  carousel: [],
  guess: [],
  channelList: [],
  pageInfo: {
    page: 1,
    results: 150,
    hasMore: false,
  },
  activeCarouselIndex: 0,
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
    *fetchChannelList({callback, payload}, {call, put, select}) {
      console.log('[LXH][开始请求频道列表数据......]');

      const {channelList, pageInfo} = yield select(
        (state: RootState) => state.home,
      );

      let page = 1;
      if (payload && payload.loadMore) {
        page = pageInfo.page + 1;
      }
      const {data} = yield call(axios.get, ChannelListUrl, {
        params: {
          page,
        },
      });

      let newList = data.results;
      console.log('[LXH][返回频道列表]', data);

      if (payload && payload.loadMore) {
        newList = channelList.concat(newList);
      }

      yield put({
        type: 'setState',
        payload: {
          channelList: newList,
          pageInfo: {
            page: data.info.page,
            results: data.info.results,
            hasMore: channelList.length < data.info.results,
          },
        },
      });

      if (typeof callback === 'function') {
        callback();
      }
    },
  },
};

export default homeModel;
