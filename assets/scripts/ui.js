'use strict'

const store = require('./store')
const showDestinationTemplate = require('./templates/destination-listing.handlebars')
const showEditformTemplate = require('./templates/edit-form.handlebars')

// first loaded, see sign-in form
const forFirstView = function () {
  $('.firstView2').hide()
  $('#sign-up').hide()
  $('#change-password').hide()
  $('#nav2').hide()
  $('.create').hide()
  $('.edit').hide()
  $('#list').hide()
  $('#message').hide()
  // $('.secondView').hide()
  $('.firstView1').show()
}
// for sign-up form
const forFirstView1 = function () {
  $('#change-password').hide()
  $('#nav2').hide()
  $('.create').hide()
  $('.edit').hide()
  $('#list').hide()
  $('#message').hide()
  $('#sign-in').hide()
  $('#signUpInOut').hide()
  $('#sign-up').show()
}
// for sign-in form
const forFirstView2 = function () {
  $('#change-password').hide()
  $('#nav2').hide()
  $('.create').hide()
  $('.edit').hide()
  $('#list').hide()
  $('#message').hide()
  $('#sign-up').hide()
  $('#signUpInOut').hide()
  $('#sign-in').show()
}
// show PW change form
const forChangePW = function () {
  $('.firstView1').hide()
  $('#change-password').hide()
  $('#nav2').hide()
  $('.create').hide()
  $('.edit').hide()
  $('#list').hide()
  $('#message').hide()
  $('#signUpInOut').hide()
  $('#change-password').show()
}
// for when cancel button is clicked when changing pw
const forPWChangeCancel = function (data) {
  event.preventDefault()
  // $('#signUpInOut').text('Signed in successfully!')
  $('#signUpInOut').hide()
  // $('#signUpInOut').addClass('success')
  $('.firstView1').hide()
  $('#sign-in').hide()
  $('#change-password').hide()
  $('.firstView2').show()
  $('#change-password').hide()
  $('.create').hide()
  $('#list').hide()
  $('#message').hide()
  $('.edit').hide()
  $('#nav2').show()
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}
const showCreateForm = function () {
  $('#signUpInOut').hide()
  $('#list').hide()
  $('#message').hide()
  $('.edit').hide()
  $('.create').show()
}
const signUpSuccess = function (data) {
  $('#signUpInOut').show()
  $('#signUpInOut').text('Signed up successfully')
  $('#signUpInOut').removeClass()
  $('#signUpInOut').addClass('success')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
  $('#sign-up').hide()
  $('#sign-in').show()
}
const signUpFailure = function (data) {
  $('#signUpInOut').show()
  $('#signUpInOut').text('Signed up failed')
  $('#signUpInOut').removeClass()
  $('#signUpInOut').addClass('failure')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}

const signInSuccess = function (data) {
  $('#signUpInOut').text('Signed in successfully!')
  $('#signUpInOut').removeClass()
  $('#signUpInOut').addClass('success')
  $('.firstView1').hide()
  $('#sign-in').hide()
  // $('#change-password').hide()
  $('.create').hide()
  $('#list').hide()
  $('#message').hide()
  $('.edit').hide()
  $('#signUpInOut').show()
  $('.firstView2').show()
  $('#nav2').show()
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
  // $('.edit-clicked').hide()
  store.user = data.user
}
const signInFailure = function (data) {
  $('#signUpInOut').show()
  $('#signUpInOut').text('Signed in failed')
  $('#signUpInOut').removeClass()
  $('#signUpInOut').addClass('failure')
  $('.firstView2').hide()
  $('#sign-up').hide()
  $('#sign-in').show()
  $('.firstView1').show()
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
  // $('.edit-clicked').hide()
}
// -----------------------------------
const pwChangeSuccess = function (data) {
  $('#sign-in').hide()
  $('.firstView1').hide()
  $('#change-password').hide()
  $('#signUpInOut').text('Password change successfully!')
  $('#signUpInOut').removeClass()
  $('#signUpInOut').addClass('success')
  $('.create').hide()
  $('#list').hide()
  $('#message').hide()
  $('.edit').hide()
  $('#signUpInOut').show()
  $('.firstView2').show()
  $('#nav2').show()
  // $('#message').show()
  // $('#nav2').show()
  // $('.edit').show()
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}
const pwChangeFailure = function (data) {
  $('#signUpInOut').show()
  $('#signUpInOut').text('Password change failed')
  $('#signUpInOut').removeClass()
  $('#signUpInOut').addClass('failure')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}

const logOutSuccess = function (data) {
  $('#signUpInOut').text('Sign out successfully!')
  $('#signUpInOut').removeClass()
  $('.create').hide()
  $('#list').hide()
  $('#nav2').hide()
  $('.edit').hide()
  $('.firstView2').hide()
  $('#message').hide()
  $('#signUpInOut').show()
  $('.firstView1').show()
  // $('#signUpInOut').hide()
  // $('#sign-up').show()
  $('#signUpInOut').addClass('success')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
  $('.edit-clicked').hide()
  // $('#list').hide()
}

const logOutFailure = function (data) {
  $('#signUpInOut').text('How did you even fail logging out????')
  $('#signUpInOut').removeClass()
  $('#signUpInOut').addClass('failure')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
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
const createDestinationSuccess = function (data) {
  $('#signUpInOut').hide()
  $('#message').show()
  $('form input[type="text"]').val('')
  $('form input[type="text"]').val('')
  // $('#list').show()
  // $('.edit-clicked').hide()
}
const showDestinationSuccess = (data) => {
  $('#signUpInOut').hide()
  $('.create').hide()
  $('.edit').show()
  $('#message').show()
  // $('#createNew').hide()
  $('#message').text(`Your most updated list!`)
  $('.edit-clicked').hide()

  // console.log('is this JSON: ', data.destinations)
  const showDestinationHTML = showDestinationTemplate({ destinations: data.destinations })
  $('#list').html(showDestinationHTML)
  $('#list').show()
}
const showSaveSuccess = data => {
  $('form input[type="text"]').val('')
  $('form input[type="text"]').val('')
}
const showEditSuccess = (data) => {
  // console.log('DATA DEFINE?????: ', data)

  const showEditFormHTML = showEditformTemplate({forms: data})
  $('#edit-form').html(showEditFormHTML)
}

const success = function (data) {
  // console.log('It works, here is the data: ', data)
}
const failure = function (data) {
  // console.log('the error is: ', data)
}
module.exports = {
  forFirstView,
  forFirstView1,
  forFirstView2,
  forChangePW,
  showCreateForm,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  forPWChangeCancel,
  signInFailure,
  pwChangeSuccess,
  pwChangeFailure,
  logOutSuccess,
  logOutFailure,
  // showListSuccess,
  // toShowEditForm,
  createDestinationSuccess,
  showDestinationSuccess,
  showSaveSuccess,
  showEditSuccess,
  success,
  failure
}
