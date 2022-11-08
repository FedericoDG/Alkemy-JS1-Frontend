const transformDate = (date) =>
  `${new Intl.DateTimeFormat('es', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)} hs.`

export default transformDate
