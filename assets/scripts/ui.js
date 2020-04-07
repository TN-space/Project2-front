'use strict'

const store = require('./store')
const showDestinationTemplate = require('./templates/destination-listing.handlebars')

const signUpSuccess = function (data) {
  $('#signUpInOut').text('Signed up successfully')
  $('#signUpInOut').removeClass()
  $('#signUpInOut').addClass('success')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
  // console.log('signUpSuccess data is: ', data)
  $('.edit-clicked').hide()
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
  $('.edit-clicked').hide()
  store.user = data.user
}
const signInFailure = function (data) {
  $('#signUpInOut').text('Signed in failed')
  $('#signUpInOut').removeClass()
  $('#signUpInOut').addClass('failure')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
  // console.log('signInFailure error is: ', error)
  $('.edit-clicked').hide()
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
  $('.edit-clicked').hide()
}
const logOutFailure = function (data) {
  $('#signUpInOut').text('How did you even fail logging out????')
  $('#signUpInOut').removeClass()
  $('#signUpInOut').addClass('failure')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
  // console.log('logOutFailure error is: ', error)
}

// const showListSuccess = function (data) {
//   // console.log('SEEEEE This: ', data.destinations)
//   const createEditButton = (text = 'No text') => {
//     const button = document.createElement('button')
//     button.className = 'edit-button'
//     button.innerText = text
//     $('#list').append(button)
//     return button
//   }
//   const createDeleteButton = (text = 'No text') => {
//     const button = document.createElement('button')
//     button.className = 'delete-button'
//     button.innerText = text
//     $('#list').append(button, `<br> <br> <br>`)
//     return button
//   }
//   function emptyList () {
//     $('#list').html('')
//   }
//   emptyList()
//
//   data.destinations.forEach(destination => {
//     const destinationHTML = (`
//       <h4>name: ${destination.name}</h4>
//       <p>city: ${destination.city}</p>
//       <p>state: ${destination.state}</p>
//     `)
//     $('#list').append(destinationHTML)
//     createEditButton('Edit')
//     createDeleteButton('Delete')
//   })
//   // $('#signUpInOut').removeClass()
//   // $('form input[type="text"]').val('')
//   // $('form input[type="password"]').val('')
// }
//
// const toShowEditForm = function (data) {
//   $('*').hide()
//   $('.edit-clicked').show()
// }

const showDestinationSuccess = (data) => {
  // console.log('is this JSON: ', data.destinations)
  const showDestinationHTML = showDestinationTemplate({ destinations: data.destinations })
  $('#list').html(showDestinationHTML)
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
  // showListSuccess,
  // toShowEditForm,
  showDestinationSuccess,
  success,
  failure
}
