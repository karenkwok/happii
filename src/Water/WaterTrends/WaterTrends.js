import './WaterTrends.scss';
import React, { useEffect } from 'react';
import { get } from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setWaterTrends } from '../../features/water/waterSlice';

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

export function WaterTrends() {
  const dispatch = useDispatch();

  const username = useSelector((state) =>
    state.auth.user ? state.auth.user.username : null
  );

  const waterTrends = useSelector((state) => state.water.waterTrends);
  const intakeData = waterTrends.map((day) => {
    return day.intake;
  });

  const options = {
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

  var getDaysArray = function (start, end) {
    for (
      var arr = [], dt = new Date(start);
      dt <= end;
      dt.setDate(dt.getDate() + 1)
    ) {
      arr.push(new Date(dt));
    }
    return arr;
  };

  let [labels, setLabels] = React.useState([]);

  const data = {
    labels,
    datasets: [
      {
        label: username,
        data: intakeData,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  let today = new Date();
  let lastweek = new Date();
  lastweek.setDate(lastweek.getDate() - 7);
  let startDate = '';
  let endDate = '';

  const dateChangeFunction = (date) => {
    startDate = date[0];
    endDate = date[1];

    const offset = startDate.getTimezoneOffset();
    startDate = new Date(startDate.getTime() - offset * 60 * 1000);
    startDate = startDate.toISOString().split('T')[0];

    endDate = new Date(endDate.getTime() - offset * 60 * 1000);
    endDate = endDate.toISOString().split('T')[0];

    var daylist = getDaysArray(new Date(startDate), new Date(endDate));
    setLabels(daylist.map((v) => v.toISOString().slice(0, 10)));

    dispatch(getWaterTrendsActionCreator(startDate, endDate));
  };

  useEffect(() => {
    dateChangeFunction([lastweek, today]);
  }, [lastweek.toISOString().slice(0,10), today.toISOString().slice(0,10)]);

  return (
    <div id="watertrends-body">
      <div id="watertrends-box">
        Choose date range:
        <DateRangePicker
          onOk={dateChangeFunction}
          defaultValue={[lastweek, today]}
        ></DateRangePicker>
        <div id="chart">
          <Line options={options} data={data} />
        </div>
      </div>
    </div>
  );
}

function getWaterTrendsActionCreator(startDate, endDate) {
  return async function getWaterTrends(dispatch, getState) {
    const response = await get(
      `/water/intake_trends/?start_date=${startDate}&end_date=${endDate}`
    );
    dispatch(setWaterTrends(response.data));
  };
}
