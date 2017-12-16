import * as zbService from '../services/zb'

export default {
  namespace: 'dashboard',
  state: {
    btc: {
      ticker: { last: 0 },
    },
  },
  reducers: {
    saveBTC (state, { payload: { btc } }) {
      const change = btc.ticker.last < state.btc.ticker.last ? 'down' : 'up'
      return {
        ...state,
        btc: {
          ...btc,
          change,
        },
      }
    },
  },
  effects: {
    * watchBTC ({ payload: data }, { put }) {
      yield put({
        type: 'saveBTC',
        payload: {
          btc: data,
        },
      })
    },
  },
  subscriptions: {
    openSocket ({ dispatch }) {
      return zbService.wsConnect((data) => {
        dispatch({ type: 'watchBTC', payload: data })
      })
    },
  },
}
