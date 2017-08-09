'use strict'
const alfy = require('alfy')
const reminders = require('./lib/reminders')

const lists = reminders
  .getLists()
  .filter(list => list.toLowerCase().includes(alfy.input.toLowerCase()))
  .map((list, index) => {
    const length = reminders.getRemindersInList(list).length
    return {
      title: `${list} List`,
      subtitle: `Show all ${length} ${length === 1 ? 'reminder' : 'reminders'} in "${list}"`,
      arg: list
    }
  })

alfy.output(lists)
