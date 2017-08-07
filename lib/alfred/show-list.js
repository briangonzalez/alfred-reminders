'use strict';
const alfy = require('alfy');
const reminders = require('../reminders')
const findMostLikelyListForInput = require('../most-likely-list-for-input')

const lists = reminders.getLists()
const list = findMostLikelyListForInput(alfy.input, lists)

const [throwAwayList, reminder] = alfy.input.split(list + ' ')

if (!alfy.input) {
  return alfy.output([
    {
      title: `No lists found for input, type to search`,
      subtitle: `Valid lists include: ${reminders.getLists().join(', ')}`,
      argv: ''
    }
  ])
}

let addItem
if (reminder) {
  const data = JSON.stringify({ reminder, list, action: 'add' })
  addItem = {
    title: `Add reminder "${reminder}" to ${list} list`,
    subtitle: `Press Enter to add ${reminder}`,
    arg: data
  }
}

const completions = reminders.getRemindersInList(list)
  .map((reminder, index) => {
    return {
      title: reminder,
      subtitle: `In "${list}" list, press enter to complete`,
      arg: JSON.stringify({ index, list, action: 'complete' })
    }
  })

const output = addItem ? [addItem, ...completions] : completions
alfy.output(output)


