
const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  // console.log('data is ', data)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const pwChange = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const logOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showListReq = function () {
  return $.ajax({
    url: config.apiUrl + '/destinations',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createDestinationReq = function (data) {
  return $.ajax({
    url: config.apiUrl + '/destinations',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const editDestinationReq = function (name, city, state) {
  return $.ajax({
    url: config.apiUrl + '/destinations/' + store.destination.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      destination: {
        name: name,
        city: city,
        state: state
      }
    }
  })
}

const deleteDestinationReq = function () {
  return $.ajax({
    url: config.apiUrl + '/destinations/' + store.destination.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  pwChange,
  logOut,
  createDestinationReq,
  showListReq,
  editDestinationReq,
  deleteDestinationReq
}
