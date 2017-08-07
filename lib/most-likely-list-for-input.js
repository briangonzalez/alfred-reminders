module.exports = (input, lists) => {
  const inputParts = input.split(' ')

  // Iterate over input parts
  // If list begins with input part, return 1
  // Otherwise, return 0
  // Score, then return one with highest score

  const mostLikely = lists
    .map((list) => {
      const score = inputParts
        .map((part, index) => {
          const inputPart = inputParts.slice(0, index + 1).join(' ')
          return list.startsWith(inputPart) ? 1 : 0
        })
        .reduce((val1, val2) => val1 + val2)

      return { list, score }
    })
    .reduce((prev, current) => {
      return prev.score > current.score ? prev : current
    })

  return mostLikely.list;
}
