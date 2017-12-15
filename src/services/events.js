import request from '../utils/request';

const HOST = 'https://api.github.com';

export function fetch() {
  return request(`${HOST}/users/SevenOutman/received_events`);
}
