const alfy = require('alfy')
const reminders = require('../reminders')

const input = JSON.parse(alfy.input)

if (input.action === 'add') {
  reminders.addReminder(input.reminder, input.list)
  console.log(`Added "${input.reminder}" reminder to "${input.list}"`)
} else {
  reminders.completeReminder(input.index, input.list)
  const reminder = reminders.getRemindersInList(input.list)[parseInt(input.index)]
  console.log(`Completed "${reminder}" in "${input.list}"`)
}
