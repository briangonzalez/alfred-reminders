const alfy = require('alfy')
const reminders = require('../reminders')

const input = JSON.parse(alfy.input)

if (input.action === 'add') {
  reminders.addReminder(input.reminder, input.list)
} else {
  reminders.completeReminder(input.index, input.list)
}
