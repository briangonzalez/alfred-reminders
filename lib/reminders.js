const path = require('path')

const remindersCLIPath = path.join(__dirname, '../bin', 'reminders')
const execSync = require('child_process').execSync

function getLists() {
  const lists = execSync(`${remindersCLIPath} show-lists`, { stdio: [0] }, 'utf8')
    .toString()
    .split("\n")
    .map(l => l.trim())
    .sort()
    .filter(l => l)

  return lists
}

function getRemindersInList(list = "") {
  const cmd = `${remindersCLIPath} show "${list}"`
  let reminders = []
  try {
    reminders = execSync(cmd, { stdio: [0] }, 'utf8')
      .toString()
      .split("\n")
      .map(r => r.trim())
      .map((r, idx) => r.split(/[0-9]\s/)[1])
      .filter(l => l)
  } catch (e) { }

  return reminders
}

function addReminder(reminder, list) {
  list = list || "Reminders"
  return execSync(`${remindersCLIPath} add "${list}" "${reminder}"`, { stdio: [0] }, 'utf8')
}

function completeReminder(index, list) {
  return execSync(`${remindersCLIPath} complete "${list}" "${index}"`, { stdio: [0] }, 'utf8')
}

module.exports = {
  getLists,
  getRemindersInList,
  addReminder,
  completeReminder
}
