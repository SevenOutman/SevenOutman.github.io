import request from '../utils/request'

const HOST = 'https://api.github.com'

export function fetch () {
  return request(`${HOST}/user/repos?sort=updated`)
}
