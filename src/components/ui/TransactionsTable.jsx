import {DataGrid} from '@mui/x-data-grid'

const columns = [
  {
    field: 'amount',
    headerName: 'Amount',
    type: 'number',
    width: 60,
    flex: 0.5,
    description: 'Amount',
    renderCell: (cellValues) => `$ ${cellValues.value}`,
  },
  {field: 'concept', headerName: 'Concept', width: 130, flex: 1, description: 'Concept'},
  {field: 'date', headerName: 'Date', type: 'date', width: 130, flex: 1, description: 'Date'},
  {
    field: 'categoryName',
    headerName: 'Category',
    description: 'Category',
    width: 160,
    flex: 1,
  },
  {
    field: 'categoryType',
    headerName: 'Flow',
    with: 130,
    flex: 1,
    description: 'Flow',
    renderCell: (cellValues) => (
      <div>{`${cellValues.value === 'in' ? '🟢' : '🔴'} ${cellValues.value}`}</div>
    ),
  },
]

const TransactionsTable = ({transactions}) => {
  const tableRows = transactions.map(
    ({amount, concept, transactionDate, category, flow}, index) => ({
      id: index,
      amount,
      concept,
      date: Date(transactionDate),
      categoryName: category.name,
      categoryType: flow,
    })
  )

  return (
    <div style={{height: 400, width: '100%'}}>
      <DataGrid columns={columns} pageSize={5} rows={tableRows} rowsPerPageOptions={[5]} />
    </div>
  )
}

export default TransactionsTable
