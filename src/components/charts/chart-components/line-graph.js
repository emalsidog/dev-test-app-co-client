// Dependencies
import React from "react";
import { Line } from 'react-chartjs-2';

const LineGraph = ({ stats }) => {
  const transformData = (label, data, dates) => ({
    labels: dates,
    datasets: [{ label, data }],
  });

  let dates = [];
  let clicks = [];
  let views = [];

  for (let item of stats) {
    clicks.push(item.clicks);
    dates.push(item.date);
    views.push(item.page_views)
  }

  return (
    <div>
      <Line data={transformData("Clicks", clicks, dates)} />
      <Line data={transformData("Views", views, dates)} />
    </div>
  );
}

export default LineGraph;