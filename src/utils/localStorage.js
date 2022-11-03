const localStorage = {
  write: (key, value) => window.localStorage.setItem(key, JSON.stringify(value)),
  read: (key) => JSON.parse(window.localStorage.getItem(key)),
  remove: (key) => window.localStorage.removeItem(key),
}

export default localStorage
