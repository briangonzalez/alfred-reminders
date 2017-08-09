const findMostLikelyListForInput = require('./most-likely-list-for-input')

test('findMostLikelyListForInput should find the most likely list – multi word input', () => {
  const input = 'Teaching to Youth foo bar baz'
  const lists = [
    'Teaching to Youth',
    'Teaching to Wallabees',
    'Teach to Young folks'
  ]

  expect(findMostLikelyListForInput(input, lists))
    .toEqual('Teaching to Youth')
})

test('findMostLikelyListForInput should find the most likely list – single word input', () => {
  const input = 'Work'
  const lists = [
    'Work',
    'Reminders',
    'Personal'
  ]

  expect(findMostLikelyListForInput(input, lists))
    .toEqual('Work')
})
