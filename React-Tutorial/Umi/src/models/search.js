import { getSearchResult , getAsyncSearchResult } from '../services/search';

export default {
  namespace: 'search',
  state: {
    text: '',
    lists: [],
  },
  reducers: {
    setState(state, action) {
      return {
        ...state,
        title: action.payload,
        lists: action.payload//Array(10).fill(action.payload),
      };
    },
  },
  effects: {
    *getSearchResult({ payload }, { call, put }) {
      const result = yield call(getAsyncSearchResult, payload);
      yield put({
        type:'setState',
        payload:result.lists
      })
    },
  },
};
