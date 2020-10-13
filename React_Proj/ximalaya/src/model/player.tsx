import {Model, Effect, EffectWithType, EffectsCommandMap} from 'dva-core-ts';
import {Reducer} from 'redux';
import axios from 'axios';
import {
  initPlayer,
  playComplete,
  pause,
  getCurrentTime,
  getDuration,
  stop,
} from '@/utils/sound';
import {IProgram} from './album';

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
  currentTime: number;
  duration: number;
  currentIndex: number;
  playlist: IProgram[];
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
    watcherCurrentTime: EffectWithType;
    previous: Effect;
    next: Effect;
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
  currentTime: 0,
  duration: 0,
  currentIndex: 0,
  playlist: [],
};

const delay = (timeout: number) =>
  new Promise((resolve) => setTimeout(resolve, timeout));

function* currentTime({call, put}: EffectsCommandMap) {
  while (true) {
    yield call(delay, 1000);
    const currentTimes = yield call(getCurrentTime);
    yield put({
      type: 'setState',
      payload: {
        currentTime: currentTimes,
      },
    });
  }
}

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
    *fetchPlayerInfo(payload, {call, put}) {
      //拉取播放数据
      const {data} = yield call(axios.get, PLAYINFO_URL, {
        params: {id: payload.id},
      });
      yield call(initPlayer, data.soundUrl);
      //存储到state
      yield put({
        type: 'setState',
        payload: {
          player: data,
          duration: getDuration(),
        },
      });
      //使用拉到到音频地址初始化播放器

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
    *previous({payload}, {call, put}) {
      yield call(stop);
      yield put({
        type: 'setState',
        payload: {
          playState: 'paused',
        },
      });
    },
    *next({payload}, {call, put}) {},
    watcherCurrentTime: [
      //dva 加载的时候会执行这个方法
      function* (sagaEffects) {
        const {call, take, race} = sagaEffects;
        while (true) {
          yield take('play'); //play执行的时候才会执行下面的代码
          yield race([
            call(currentTime, sagaEffects),
            take('pause') /*pause执行的时候call中的方法就会退出*/,
          ]); //数组任意一项执行的时候推出
        }
      },
      {type: 'watcher'},
    ],
  },
};

export default playerModel;
