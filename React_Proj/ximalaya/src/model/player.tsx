import {Model, Effect} from 'dva-core-ts';
import {Reducer} from 'redux';
import axios from 'axios';
import {initPlayer, playComplete, pause} from '@/utils/sound';

const PLAYINFO_URL: string = '/mock/11/ximalaya/show';

interface Player {
  id: string;
  title: string;
  thumbnailUrl: string;
  soundUrl: string;
}

interface PlayerModelState {
  player: Player;
  playState: string;
}

interface PlayerModel extends Model {
  namespace: 'player';
  state: PlayerModelState;
  reducers: {
    setState: Reducer<PlayerModelState>;
  };
  effects: {
    fetchPlayerInfo: Effect;
    play: Effect;
    pause: Effect;
  };
}

const initState = {
  player: {
    id: '',
    title: '',
    thumbnailUrl: '',
    soundUrl: '',
  },
  playState: '',
};

const playerModel: PlayerModel = {
  namespace: 'player',
  state: initState,
  reducers: {
    setState(state, {payload}) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    *fetchPlayerInfo(_, {call, put}) {
      //拉取播放数据
      const {data} = yield call(axios.get, PLAYINFO_URL);
      //存储到state
      yield put({
        type: 'setState',
        payload: {
          player: data,
        },
      });
      //使用拉到到音频地址初始化播放器
      yield call(initPlayer, data.soundUrl);
      //播放音频
      yield put({
        type: 'play',
      });
    },
    *play(_, {call, put}) {
      yield put({
        type: 'setState',
        payload: {
          playState: 'playing',
        },
      });
      yield call(playComplete);
      yield put({
        type: 'setState',
        payload: {
          playState: 'paused',
        },
      });
    },
    *pause(_, {call, put}) {
      yield call(pause);
      yield put({
        type: 'setState',
        payload: {
          playState: 'paused',
        },
      });
    },
  },
};

export default playerModel;
