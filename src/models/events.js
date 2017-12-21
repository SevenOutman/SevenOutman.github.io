import * as ghService from '../services/github'

export default {
  namespace: 'events',
  state: [],
  reducers: {
    save (state, { payload: { data: list } }) {
      return list
    },
  },
  effects: {
    * fetch ({ payload }, { call, put }) {
      const { data } = yield call(ghService.fetchReceivedEvents)
      yield put({
        type: 'save',
        payload: {
          data,
        },
      })
    },
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/events') {
          dispatch({ type: 'fetch' })
        }
      })
    },
  },
}
