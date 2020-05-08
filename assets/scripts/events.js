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
// END AUTH EVENT!!!!!!!!!!!!!!!!!!!

const destinations = []
const toCreateDestination = function (event) {
  event.preventDefault()
  const destination = {
    destination: {
      name: $('#name').val(),
      city: $('#city').val(),
      state: $('#state').val()
    }
  }
  destinations.push(destination)
  api.createDestinationReq(destination)
    .then(ui.createDestinationSuccess)
    // .then(function () {
    //   toShowList(event)
    // })
    .catch(ui.failure)
  // document.querySelector('form').reset() // to clear the form for next entries
}

const toShowList = function (event) {
  event.preventDefault()
  api.showListReq()
    .then(ui.showDestinationSuccess)
    .catch(ui.failure)
}
const toDeleteDestination = function (event) {
  event.preventDefault()
  const destinationID = $(event.target).data('id')
  api.deleteDestinationReq(destinationID)
    .then(function () {
      toShowList(event)
    })
    .catch(ui.failure)
}
const toShowEditForm = function (event) {
  event.preventDefault()
  const destinationID = $(event.target).data('id')

  api.getDestinationReq(destinationID)
    .then(ui.showEditFormSuccess)
    .catch(ui.failure)
}
const toSaveEditForm = function (event) {
  event.preventDefault()
  const destinationData = getFormFields(event.target)
  const destinationID = destinationData.destination.id

  api.editDestinationReq(destinationID, destinationData)
    .then(function () {
      toShowList(event)
    })
    .catch(ui.failure)
}

const addHandlebars = () => {
  $('#listing-button').on('click', toShowList)
  $('#list').on('click', '.delete-button', toDeleteDestination)
  $('#list').on('click', '.edit-button', toShowEditForm)
  $('#edit-form').on('click', '.cancel-button', toShowList)
  // $('#list').on('submit', '.update-this', toSaveEditForm)
}

module.exports = {
  onSignUp,
  onSignIn,
  onPwChange,
  onLogOut,
  toCreateDestination,
  toSaveEditForm,
  addHandlebars
}
