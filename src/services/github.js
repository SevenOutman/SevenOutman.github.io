import request from '../utils/request'

const HOST = 'https://api.github.com'

const githubOptions = {
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: 'token a9426eaed076b5ded4b2eac107d391640942beb9',
  },
}

export function fetchReceivedEvents () {
  return request(`${HOST}/users/SevenOutman/received_events`, githubOptions)
}

export function fetchRepos () {
  return request(`${HOST}/user/repos?sort=updated`, githubOptions)
}
