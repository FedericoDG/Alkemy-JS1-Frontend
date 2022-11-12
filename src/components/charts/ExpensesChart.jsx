import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import {Doughnut} from 'react-chartjs-2'

import generateColor from '../../utils/generateColor'

ChartJS.register(ArcElement, Tooltip, Legend)

const ExpensesChart = ({obj, displayLabel = true}) => {
  const data = {
    labels: obj.map((el) => el.name),
    datasets: [
      {
        label: 'Gastos',
        data: obj.map((el) => el.total),
        backgroundColor: obj.map((el, index) => generateColor(index)),
        borderColor: obj.map((el, index) => generateColor(index)),
        borderWidth: 1,
      },
    ],
  }

  return (
    <Doughnut
      data={data}
      options={{
        plugins: {
          legend: {
            display: displayLabel,
            position: 'bottom',
          },
          usePointStyle: true,
          boxWidth: 6,
        },
      }}
    />
  )
}

export default ExpensesChart
