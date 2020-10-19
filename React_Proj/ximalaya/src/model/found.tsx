import {Model, Effect} from 'dva-core-ts';
import axios from 'axios';

const FOUND_URL = '/mock/11/ximalaya/found/list';

interface User {
  id: string;
  name: string;
  avatar: string;
}

export interface Found {
  id: string;
  thumbnailUrl: string;
  videoUrl: string;
  forward: number;
  comment: number;
  like: number;
  backgroundColor: string;
  user: User;
}

interface FoundModel extends Model {
  namespace: 'found';
  effects: {
    fetchFoundList: Effect;
  };
}

const foundModel: FoundModel = {
  namespace: 'found',
  state: {},
  effects: {
    *fetchFoundList({callback}, {call}) {
      const {data} = yield call(axios.get, FOUND_URL);
      console.log('======>data', data);
      console.log('======>callback', callback);
      if (typeof callback === 'function') {
        callback(data);
      }
    },
  },
};

export default foundModel;
