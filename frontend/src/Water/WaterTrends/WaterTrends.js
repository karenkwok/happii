import './WaterTrends.scss';
import React from 'react';

import { DateRangePicker } from 'rsuite';
import 'rsuite/styles/index.less';
import 'rsuite/dist/rsuite.min.css';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Water Trends',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Karen',
      data: [4, 2, 0, 9, 6, 8, 8],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Jason',
      data: [6, 9, 4, 0, 2, 7, 4],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function WaterTrends() {
  return (
    <div id="watertrends-body">
      <div id="watertrends-box">
        Choose date range:
        <DateRangePicker></DateRangePicker>
        <div id="chart">
          <Line options={options} data={data} />
        </div>
      </div>
    </div>
  );
}
