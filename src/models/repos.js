import * as ghService from '../services/github';

export default {
  namespace: 'repos',
  state: [],
  reducers: {
    save(state, { payload: { data: list } }) {
      return list;
    },
  },
  effects: {
    * fetch({ payload }, { call, put }) {
      const { data } = yield call(ghService.fetchRepos);
      yield put({
        type: 'save',
        payload: {
          data,
        },
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/repos') {
          dispatch({ type: 'fetch' });
        }
      });
    },
  },
};
