import {Model, Effect} from 'dva-core-ts';
import {Reducer} from 'redux';
import axios from 'axios';

const ALBUM_URL = '/mock/11/ximalaya/album/list';

interface IAuthor {
  id: string;
  name: string;
  attention: string;
  avatar: string;
}

interface IProgram {
  id: string;
  title: string;
  playVolume: number;
  duration: number;
  data: string;
  serial: number;
}

export interface IAlbumState {
  id: string;
  thumbnailUrl: string;
  title: string;
  summary: string;
  introduction: string;
  author: IAuthor;
  list: IProgram[];
}

interface IAlbumModel extends Model {
  namespace: 'album';
  state: IAlbumState;
  reducers: {
    setState: Reducer<IAlbumState>;
  };
  effects: {
    fetchAlbumList: Effect;
  };
}

const initState = {
  id: '',
  thumbnailUrl: '',
  title: '',
  summary: '',
  introduction: '',
  author: {
    id: '',
    name: '',
    attention: '',
    avatar: '',
  },
  list: [],
};

const albumModel: IAlbumModel = {
  namespace: 'album',
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
    *fetchAlbumList(_, {call, put}) {
      const {data} = yield call(axios.get, ALBUM_URL);
      yield put({
        type: 'setState',
        payload: {
          ...data,
        },
      });
    },
  },
};

export default albumModel;
