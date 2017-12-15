import * as eventsService from '../services/events';

export default {
  namespace: 'events',
  state: [],
  reducers: {
    save(state, { payload: { data: list } }) {
      return list;
    },
  },
  effects: {
    * fetch({ payload }, { call, put }) {
      const { data } = yield call(eventsService.fetch);
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
        if (pathname === '/events' || pathname === '/') {
          dispatch({ type: 'fetch' });
        }
      });
    },
  },
};
