import React from 'react';
import { Bar } from 'react-chartjs-2';

const TokenomicsChart = () => {
  const data = {
    labels: ['Token Supply', 'Token Distribution', 'Token Burn'],
    datasets: [{
      label: 'Tokenomics',
      data: [1000000, 500000, 200000],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1
    }]
  };

  const options = {
    title: {
      display: true,
      text: 'Tokenomics Chart'
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default TokenomicsChart;