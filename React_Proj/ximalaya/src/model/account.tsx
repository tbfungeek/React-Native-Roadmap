import {Model, Effect} from 'dva-core-ts';
import {Reducer} from 'redux';
import axios from 'axios';
import {Alert} from 'react-native';

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
  };
  reducers: {
    setState: Reducer<IUserState>;
  };
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
        put({
          type: 'setState',
          user: data,
        });
        Alert.alert('登陆成功');
      } else {
        Alert.alert('登陆失败');
      }
    },
    *logOut({payload}, {call, put}) {
      put({
        type: 'setState',
        user: undefined,
      });
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
};

export default accountModel;
