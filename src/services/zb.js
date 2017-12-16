import request from '../utils/request'

const HOST = 'http://api.zb.com/data/v1'

export function fetch () {
  return request(`${HOST}/ticker?market=btc_usdt`)
}

let ws

export function wsConnect (action) {
  ws = new global.WebSocket('wss://api.zb.com:9999/websocket')
  ws.onopen = () => {
    ws.send(JSON.stringify({
      event: 'addChannel',
      channel: 'btcusdt_ticker',
    }))
  }
  ws.onmessage = ({ data }) => {
    action(JSON.parse(data))
  }
}
