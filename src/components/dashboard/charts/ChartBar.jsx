import { Chart } from 'chart.js/auto'
import { Bar }            from 'react-chartjs-2'

const data = {
  labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
  datasets: [
    {
      label: 'Bar Chart Example',
      data: [
        100, 
        100, 
        100, 
        100,
        100,
        100,
        100
      ],
      backgroundColor: [
        '#EEF0FA',
        '#EEF0FA', 
        '#EEF0FA', 
        '#EEF0FA', 
        '#EEF0FA',
        '#EEF0FA',
        '#EEF0FA',
      ],

      barThickness: 20,
      barPercentage:40,
      categoryPercentage: 1,
      borderSkipped: false,
      borderRadius: {
        topLeft: 100,
        topRight: 100,
        bottomRight: 100,
        bottomLeft: 100,
      }
    },
  ],
};


const options = {
  layout: {
    padding: {
        right: -450
    }
  },
  plugins: {
    animation: {
      duration: 0, // Disable animations by setting duration to 0
    },
  },
  scales: {
    x: {
      // display: false, 
     
      offset: true,
      ticks: {
        display: true,
      },
      ticks:{
        color: '#BEC0CA'
      },
      border :{
        display: false,
      },
      grid: {
        color: '#fff',
        tickWidth: 5,
        display: true,
        lineWidth: 5,
        z: 0
      },
      type: 'category',
      labels: [
        'Sep 10', 
        'Sep 11', 
        'Sep 12', 
        'Sep 13', 
        'Sep 14',
        'Sep 15',
        'Sep 16',
      ],
    },
    y: {
      border :{
        display: false,
      },
      ticks:{
        callback: function (value, index, values) {

          return value != 0 ? value + 'k' : '';
        },
        stepSize: 20,    // Set the step size
        color: '#BEC0CA'
      },
      beginAtZero: true,
      grid: {
        drawOnChartArea: false,
        drawTicks: false,
        borderWidth: 5,
        display: false,
      }
    },
  },
  plugins: {
    legend: {
      display: false, // Set to false to hide the legend
    },
  },
  responsive: true,
};



function ChartBar() {
  return (
    <Bar data={data} options={options} style={{ height: '400px', width: '600px' }}/>
  );
}

export default ChartBar;