'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./events.js')
// const ui = require('./ui.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  // sign in on submit
  $('#sign-in').on('submit', authEvents.onSignIn)
  // change pw on submit
  $('#change-password').on('submit', authEvents.onPwChange)
  // sign out on submit
  $('#log-out').on('submit', authEvents.onLogOut)
  $('#create-btn').on('click', authEvents.toCreateDestination)
  $('#save-button').on('click', authEvents.toSaveEdit)
  authEvents.addHandlebars()
  // $('#list').on('click', '.edit-button', ui.toShowEditForm)

  // $('#show-list').on('click', authEvents.toShowList)
  // $('.edit-button').on('click', ui.toShowEditForm)
  // $('.delete-button').on('click', authEvents.toDeleteDestination)
})
