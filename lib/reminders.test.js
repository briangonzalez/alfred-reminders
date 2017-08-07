const { getLists, getRemindersInList, addReminder, completeReminder } = require('./reminders')

const list = 'Reminders'

test('getLists returns an array', () => {
  expect(Array.isArray(getLists()));
});

test('getRemindersInList returns an array', () => {
  expect(Array.isArray(getRemindersInList(list)));
});

test('getRemindersInList removes prepended indices', () => {
  expect(getRemindersInList(list).filter(i => i.match(/^[0-9]/)).length)
    .toBe(0)
});

test('it can add and complete reminders', () => {
  const reminder = 'DO THIS NOW'
  const expected = [
    expect.stringMatching(/DO THIS NOW/),
  ]

  // Add it.
  addReminder(reminder, list)
  expect(getRemindersInList(list))
    .toEqual(expect.arrayContaining(expected));

  // Complete it.
  const index = getRemindersInList(list).indexOf(reminder)
  completeReminder(index, list)
  expect(getRemindersInList(list).filter(r => r === reminder)).toEqual([])
});
