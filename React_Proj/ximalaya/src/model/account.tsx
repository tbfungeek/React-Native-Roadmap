import {Model, Effect, SubscriptionsMapObject} from 'dva-core-ts';
import {Reducer} from 'redux';
import axios from 'axios';
import {goBack} from '@/utils/utils';
import storage, {load} from './storage/storage';
import Toast from 'react-native-root-toast';

const LOGIN_URL = '/mock/11/ximalaya/login';

interface IUser {
  name: string;
  avatar: string;
}

interface IUserState {
  user: IUser | undefined;
}

interface IAccountModel extends Model {
  namespace: 'account';
  state: IUserState;
  effects: {
    login: Effect;
    logOut: Effect;
    loadStorage: Effect;
  };
  reducers: {
    setState: Reducer<IUserState>;
  };
  subscriptions: SubscriptionsMapObject;
}

const initialState: IUserState = {
  user: undefined,
};

const accountModel: IAccountModel = {
  namespace: 'account',
  state: initialState,
  effects: {
    *login({payload}, {call, put}) {
      const {status, data} = yield call(axios.post, LOGIN_URL, payload);
      console.log('===========>', status, data);
      if (status === 200) {
        yield put({
          type: 'setState',
          payload: {user: data},
        });
        storage.save({key: 'user', data: data});
        console.log('===========>', '登陆成功', payload);
        Toast.show('登陆成功', {
          duration: Toast.durations.LONG,
          position: Toast.positions.CENTER,
          shadow: true,
          animation: true,
        });
        goBack();
      } else {
        console.log('===========>', '登陆失败', payload);
        Toast.show('登陆失败', {
          duration: Toast.durations.LONG,
          position: Toast.positions.CENTER,
          shadow: true,
          animation: true,
        });
      }
    },
    *logOut(_, {put}) {
      yield put({
        type: 'setState',
        payload: {user: null},
      });
      storage.save({key: 'user', data: null});
    },
    *loadStorage(_, {put, call}) {
      try {
        const user = yield call(load, {key: 'user'});
        yield put({
          type: 'setState',
          payload: {user: user},
        });
      } catch (error) {
        yield put({
          type: 'setState',
          payload: {user: null},
        });
      }
    },
  },
  reducers: {
    setState(state, {payload}) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  subscriptions: {
    setup({dispatch}) {
      dispatch({
        type: 'loadStorage',
      });
    },
  },
};

export default accountModel;
