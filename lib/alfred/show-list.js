'use strict'
const alfy = require('alfy')
const reminders = require('../reminders')
const findMostLikelyListForInput = require('../most-likely-list-for-input')

const lists = reminders.getLists()
const list = findMostLikelyListForInput(alfy.input, lists)

const [throwAwayList, reminder] = alfy.input.split(list + ' ') // eslint-disable-line no-unused-vars

if (!alfy.input) {
  alfy.output([
    {
      title: `No lists found for input. Type to search`,
      subtitle: `Valid lists include: ${reminders.getLists().join(', ')}`,
      argv: ''
    }
  ])
} else {
  let addItem
  if (reminder) {
    const data = JSON.stringify({ reminder, list, action: 'add' })
    addItem = {
      title: `"${reminder}"`,
      subtitle: `Add reminder to "${list}"`,
      arg: data
    }
  }

  const completions = reminders.getRemindersInList(list)
    .map((reminder, index) => {
      return {
        title: reminder,
        subtitle: `Complete reminder in "${list}"`,
        arg: JSON.stringify({ index, list, action: 'complete' })
      }
    })

  const output = addItem ? [addItem, ...completions] : completions
  alfy.output(output)
}
