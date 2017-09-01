'use strict'
const alfy = require('alfy')
const reminders = require('./lib/reminders')

const lists = reminders
  .getLists()
  .filter(list => list.toLowerCase().includes(alfy.input.toLowerCase()))
  .map((list, index) => {
    return {
      title: `${list}`,
      subtitle: `Show all reminders in ${list} list`,
      arg: list
    }
  })

alfy.output(lists)
