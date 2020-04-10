'use strict'

const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const editTemplate = require('./templates/edit-form.handlebars')

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
    // .then(toShowList())
    .then(toShowList())
    // .then(ui.createDestinationSuccess)
    .catch(ui.failure)
  document.querySelector('form').reset() // to clear the form for next entries
}
// const toEditDestination = function (event) {
//   event.preventDefault()
//   api.editDestinationReq()
//     .then(ui.success)
//     .catch(ui.failure)
  // document.open()
  // document.write(`<form class="Edit">
  //  <label for="Destination">New name</label>
  //    <input type="text" class="input name" placeholder="Enter new name">
  //  <label for="City">New city</label>
  //    <input type="text" class="input city" placeholder="Enter new city">
  //  <label for="State">New state</label>
  //    <input type="text" class="input state" placeholder="Enter new state">
  //    <!-- <button class="btn">Update</button> -->
  //    <input type="submit" value="remove">
  //    <input type="submit" class="btn" value="update">
  //
  // </form>`)
  // document.close()
// }
const toShowList = function (event) {
  // event.preventDefault()
  api.showListReq()
    // .then(ui.showListSuccess)
    .then(ui.showDestinationSuccess)
    .catch(ui.failure)
}
const toDeleteDestination = function (event) {
  event.preventDefault()
  const destinationID = $(event.target).data('id')
  api.deleteDestinationReq(destinationID)
    .then(ui.success)
    .catch(ui.failure)
}
// const toShowEditForm = function (event) {
//   event.preventDefault()
//   console.log('This is editTemplate: ', editTemplate)
//   ui.showEditSuccess(editTemplate)
// }
const toSaveEdit = function (event) {
  event.preventDefault()
  const destination = {
    destination: {
      name: $('.name').val(),
      city: $('.city').val(),
      state: $('.state').val()
    }
  }
  const destinationID = $('.id').val()
  api.editDestinationReq(destinationID, destination)
    .then(ui.showSaveSuccess)
    .catch(ui.failure)

  // console.log('See the destination: ', destination)
}
const addHandlebars = () => {
  $('#listing-button').on('click', toShowList)
  $('#list').on('click', '.delete-button', toDeleteDestination)
  // $('#list').on('click', '.edit-button', toShowEditForm)
}
// const something = getFormFields(form)
// console.log('this is getFormFields: ', something)

module.exports = {
  onSignUp,
  onSignIn,
  onPwChange,
  onLogOut,
  toCreateDestination,
  toSaveEdit,
  addHandlebars
  // toShowList,
  // toEditDestination,
  // toDeleteDestination
}
