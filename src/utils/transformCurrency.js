const transformCurrency = (value) =>
  new Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARS'}).format(value)

export default transformCurrency
