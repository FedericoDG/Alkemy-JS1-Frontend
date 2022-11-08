import {DataGrid} from '@mui/x-data-grid'

const columns = [
  {field: 'amount', headerName: 'Amount', type: 'number', width: 60, flex: 0.5},
  {field: 'concept', headerName: 'Concept', width: 130, flex: 1},
  {
    field: 'date',
    headerName: 'Date',
    type: 'date',
    width: 130,
    flex: 1,
  },
  {
    field: 'categoryName',
    headerName: 'Category',
    description: 'una descripcion',
    width: 160,
    flex: 1,
  },
  {
    field: 'categoryType',
    headerName: 'Flow',
    with: 130,
    flex: 1,
    renderCell: (cellValues) => (
      <div>{`${cellValues.value === 'in' ? '🟢' : '🔴'} ${cellValues.value}`}</div>
    ),
  },
]

const rows = [
  {id: 1, lastName: 'Snow', firstName: 'Jon', age: 35},
  {id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42},
  {id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45},
  {id: 4, lastName: 'Stark', firstName: 'Arya', age: 16},
  {id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null},
  {id: 6, lastName: 'Melisandre', firstName: null, age: 150},
  {id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44},
  {id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36},
  {id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65},
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

  console.log(tableRows[0].categoryType)

  return (
    <div style={{height: 400, width: '100%'}}>
      <DataGrid
        // checkboxSelection
        columns={columns}
        pageSize={5}
        rows={tableRows}
        rowsPerPageOptions={[5]}
      />
    </div>
  )
}

export default TransactionsTable
