'use strict'

const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  // console.log('Signing up')
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  // or api.signUp(getFormFields(event.target))
}

const onSignIn = function (event) {
  event.preventDefault()
  // console.log('Signing in')
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  // or api.signUp(getFormFields(event.target))
}

const onPwChange = function (event) {
  event.preventDefault()
  // console.log('Password change successful')
  const data = getFormFields(event.target)
  api.pwChange(data)
    .then(ui.pwChangeSuccess)
    .catch(ui.pwChangeFailure)
  // or api.signUp(getFormFields(event.target))
}

const onLogOut = function (event) {
  event.preventDefault()
  // console.log('Logout successful')
  api.logOut()
    .then(ui.logOutSuccess)
    .catch(ui.logOutFailure)
  // or api.signUp(getFormFields(event.target))
}

// const createDestination = function (event) {
//   event.preventDefault()
//   // console.log('Signing up')
//   const userInput = getFormFields(event.target)
//   console.log('USER input here: ', userInput)
//   api.toCreateDestination(userInput)
//     .then(ui.success)
//     .catch(ui.failure)
//   // or api.signUp(getFormFields(event.target))
// }

const showListOfDestination = function () {
  event.preventDefault()
  api.showList()
    .then(ui.showListSuccess)
    .catch(ui.failure)
}

const destinations = []
const createDestination = function (event) {
  event.preventDefault()
  // console.log('Create is ')
  // console.log('See the Destinations Array1: ', destinations)
  const destination = {
    destination: {
      name: $('#name').val(),
      city: $('#city').val(),
      state: $('#state').val()
    }
  }
  // console.log('See the destination: ', destination)
  api.toCreateDestination(destination)
    .then(ui.success)
    .catch(ui.failure)
  destinations.push(destination)
  // console.log('See the Destinations Array: ', destinations)
  document.querySelector('form').reset() // to clear the form for next entries
}
// const something = getFormFields(form)
// console.log('this is getFormFields: ', something)
module.exports = {
  onSignUp,
  onSignIn,
  onPwChange,
  onLogOut,
  createDestination,
  showListOfDestination
}
