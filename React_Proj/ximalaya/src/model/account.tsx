import {Model, Effect, SubscriptionsMapObject} from 'dva-core-ts';
import {Reducer} from 'redux';
import axios from 'axios';
import {Alert} from 'react-native';
import {goBack} from '@/utils/utils';
import storage, {load} from './storage/storage';

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
      if (status === 200) {
        yield put({
          type: 'setState',
          payload: {user: data},
        });
        storage.save({key: 'user', data: data});
        goBack();
      } else {
        //Alert.alert('登陆失败');
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
