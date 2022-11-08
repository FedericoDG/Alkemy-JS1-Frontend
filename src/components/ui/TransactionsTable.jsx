import {DataGrid, esES} from '@mui/x-data-grid'
import styled from '@emotion/styled'
import {Paper, Typography} from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'

import transformCurrency from '../../utils/transformCurrency'
import transformDate from '../../utils/transformDate'

const StyledDataGrid = styled(DataGrid)`
  &.MuiDataGrid-root .MuiDataGrid-columnHeader,
  &.MuiDataGrid-root .MuiDataGrid-columnHeader:focus,
  &.MuiDataGrid-root .MuiDataGrid-cell,
  &.MuiDataGrid-root .MuiDataGrid-cell:focus {
    outline: none;
  }
`

const TransactionsTable = ({transactions}) => {
  const columns = [
    {
      field: 'amount',
      headerName: 'Monto',
      width: 120,
      align: 'right',
      flex: 1,
      renderCell: ({row}) =>
        row.flow === 'in' ? (
          <Typography color="green" variant="button">
            {transformCurrency(row.amount)}
          </Typography>
        ) : (
          <Typography color="red" variant="button">
            {transformCurrency(row.amount)}
          </Typography>
        ),
    },
    {
      field: 'flow',
      headerName: 'Tipo',
      width: 80,
      align: 'center',
      renderCell: ({row}) =>
        row.flow === 'in' ? (
          <ArrowDropDownIcon sx={{color: 'green', fontSize: 36}} />
        ) : (
          <ArrowDropUpIcon sx={{color: 'red', fontSize: 36}} />
        ),
    },
    {
      field: 'date',
      headerName: 'Fecha',
      width: 160,
      align: 'left',
      flex: 2,
      renderCell: ({row}) => (
        <Typography variant="overline">{transformDate(row.transactionDate)}</Typography>
      ),
    },
    {
      field: 'category',
      headerName: 'Categoría',
      width: 160,
      align: 'left',
      flex: 2,
      renderCell: ({row}) => (
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <Typography variant="overline">{row.category.name}</Typography>
          {row.flow === 'in' && row.category.id === 1 && (
            <Typography variant="caption">
              De: {row.origin.firstName} {row.origin.lastName}{' '}
            </Typography>
          )}
          {row.flow === 'out' && row.category.id === 1 && (
            <Typography variant="caption">
              Para: {row.destination.firstName} {row.destination.lastName}{' '}
            </Typography>
          )}
        </div>
      ),
    },
    {
      field: 'concept',
      headerName: 'Descripción',
      width: 250,
      align: 'left',
      flex: 4,
      renderCell: ({row}) =>
        row.concept ? (
          <Typography variant="overline">{row.concept}</Typography>
        ) : (
          <Typography variant="overline">Sin descripción</Typography>
        ),
    },
  ]

  return (
    <Paper style={{height: 473, width: '100%'}}>
      <StyledDataGrid
        disableSelectionOnClick
        columns={columns}
        getRowHeight={() => 60}
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        pageSize={6}
        rows={transactions}
        rowsPerPageOptions={[6]}
        sx={{fontFamily: 'Roboto Mono, monospace'}}
      />
    </Paper>
  )
}

export default TransactionsTable
