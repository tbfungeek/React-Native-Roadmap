import {Model, Effect} from 'dva-core-ts';
import {Reducer} from 'redux';
import axios from 'axios';

const PLAYINFO_URL: string = '/mock/11/ximalaya/show';

interface Player {
  id: string;
  title: string;
  thumbnailUrl: string;
  soundUrl: string;
}

interface PlayerModelState {
  player: Player;
}

interface PlayerModel extends Model {
  namespace: 'player';
  state: PlayerModelState;
  reducers: {
    setState: Reducer<PlayerModelState>;
  };
  effects: {
    fetchPlayerInfo: Effect;
  };
}

const initState = {
  player: {
    id: '',
    title: '',
    thumbnailUrl: '',
    soundUrl: '',
  },
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
      const {data} = yield call(axios.get, PLAYINFO_URL);
      yield put({
        type: 'setState',
        payload: {
          player: data,
        },
      });
    },
  },
};

export default playerModel;
