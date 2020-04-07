'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./events.js')
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
  $('.btn').on('click', authEvents.toCreateDestination)
  authEvents.addHandlebars()
  // $('#show-list').on('click', authEvents.toShowList)
  // $('.edit-button').on('click', ui.toShowEditForm)
  // $('.delete-button').on('click', authEvents.toDeleteDestination)
})
