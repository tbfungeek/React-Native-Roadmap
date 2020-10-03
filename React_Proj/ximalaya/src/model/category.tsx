import {Model, Effect, SubscriptionsMapObject} from 'dva-core-ts';
import {Reducer} from 'redux';
import {load} from './storage/storage';
import storage from './storage/storage';
import axios from 'axios';

const CATEGORY_URL = '/mock/11/ximalaya/category';

export interface ICategory {
  id: string;
  name: string;
  classify?: string;
}

interface CategoryModelState {
  myCategories: ICategory[];
  categories: ICategory[];
}

interface CategoryModel extends Model {
  namespace: 'category';
  state: CategoryModelState;
  effects: {
    loadData: Effect;
  };
  reducers: {
    setState: Reducer<CategoryModelState>;
  };
  subscriptions: SubscriptionsMapObject;
}

const initialState = {
  myCategories: [
    {id: 'home', name: '推荐'},
    {id: 'vip', name: 'Vip'},
  ],
  categories: [],
};

const categoryModel: CategoryModel = {
  namespace: 'category',
  state: initialState,
  effects: {
    *loadData(_, {call, put}) {
      // 从storage获取数据
      const myCategories = yield call(load, {key: 'myCategories'});
      const categories = yield call(load, {key: 'categories'});
      console.log('========>myCategories', myCategories);
      console.log('========>categories', categories);
      //发送数据存储到state中
      if (myCategories) {
        yield put({
          type: 'setState',
          payload: {
            myCategories,
            categories,
          },
        });
      } else {
        yield put({
          type: 'setState',
          payload: {
            categories,
          },
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
      dispatch({type: 'loadData'});
    },
    asyncStorage() {
      storage.sync.categories = async () => {
        const {data} = await axios.get(CATEGORY_URL);
        return data;
      };

      storage.sync.myCategories = async () => {
        return null;
      };
    },
  },
};

export default categoryModel;
