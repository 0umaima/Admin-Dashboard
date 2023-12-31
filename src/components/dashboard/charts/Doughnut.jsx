import {Chart, ArcElement, Tooltip, Legend, Title} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend, Title);

const options = {
  plugins: {
    legend: {
      display: false, // Set to false to hide the legend
    },
  },
};


const data = {
  labels: [
    'Acquisition',
    'Purchase',
    'Retention'
  ],
  datasets: [{
    data: [50,30,20],
    backgroundColor: [
      '#FFCC91',
      '#97A5EB',
      '#D23565'
    ],
    borderWidth: 2,
    radius: '100%'   
  }]
};

function DoughnutData() {
  return (
    <div className=''>
        <Doughnut data={data} options={options}/>
    </div>
  );
}

export default DoughnutData;