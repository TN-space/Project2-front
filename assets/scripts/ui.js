'use strict'

const store = require('./store')

const signUpSuccess = function (data) {
  $('#signUpInOut').text('Signed up successfully')
  $('#signUpInOut').removeClass()
  $('#signUpInOut').addClass('success')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
  // console.log('signUpSuccess data is: ', data)
}
const signUpFailure = function (data) {
  $('#signUpInOut').text('Signed up failed')
  $('#signUpInOut').removeClass()
  $('#signUpInOut').addClass('failure')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
  console.log('signUpFailure error is: ', data)
}

const signInSuccess = function (data) {
  $('#signUpInOut').text('Signed in successfully!')
  $('#signUpInOut').removeClass()
  // viewLoggedIn()
  $('#signUpInOut').addClass('success')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
  // console.log('signInSuccess data is: ', data)
  store.user = data.user
}
const signInFailure = function (data) {
  $('#signUpInOut').text('Signed in failed')
  $('#signUpInOut').removeClass()
  $('#signUpInOut').addClass('failure')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
  // console.log('signInFailure error is: ', error)
}

const pwChangeSuccess = function (data) {
  $('#signUpInOut').show()
  $('#signUpInOut').text('Password change successfully!')
  $('#signUpInOut').removeClass()
  $('#signUpInOut').addClass('success')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
  // console.log('PasswordChangeSuccess data is: ', data)
}
const pwChangeFailure = function (data) {
  $('#signUpInOut').show()
  $('#signUpInOut').text('Password change failed')
  $('#signUpInOut').removeClass()
  $('#signUpInOut').addClass('failure')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
  // console.log('PasswordChangeFailure error is: ', error)
}

const logOutSuccess = function (data) {
  $('#signUpInOut').text('Logout successfully!')
  $('#signUpInOut').removeClass()
  // viewStart()
  $('#signUpInOut').addClass('success')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
  // console.log('logOutSuccess: ', data)
}
const logOutFailure = function (data) {
  $('#signUpInOut').text('How did you even fail logging out????')
  $('#signUpInOut').removeClass()
  $('#signUpInOut').addClass('failure')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
  // console.log('logOutFailure error is: ', error)
}

const showListSuccess = function (data) {
  // console.log('SEEEEE This: ', data.destinations)

  function empty () {
    $('#list').html('')
  }
  empty()

  data.destinations.forEach(destination => {
    const destinationHTML = (`
      <h4>name: ${destination.name}</h4>
      <p>city: ${destination.city}</p>
      <p>state: ${destination.state}</p>
      <br>
    `)
    $('#list').append(destinationHTML)
  })
  $('#signUpInOut').removeClass()
  // $('form input[type="text"]').val('')
  // $('form input[type="password"]').val('')
}

const success = function (data) {
  console.log('It works, here is the data: ', data)
}
const failure = function (data) {
  console.log('the error is: ', data)
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  pwChangeSuccess,
  pwChangeFailure,
  logOutSuccess,
  logOutFailure,
  showListSuccess,
  success,
  failure
}
