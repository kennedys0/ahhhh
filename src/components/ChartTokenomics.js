import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartTokenomics = () => {
    const data = {
        labels: ['Team', 'Advisors', 'Development', 'Marketing', 'Reserve', 'Community'],
        datasets: [
            {
                label: 'Token Distribution',
                data: [20, 10, 30, 15, 10, 15], // Persentase atau jumlah token
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
      responsive: true,
        plugins: {
            legend: {
              position: 'left',
                labels: {
                    font: {
                        size: 25,
                        family: 'Hazelnut',
                        weight: 'bold'
                    },
                    color: '#fff' // Warna hitam

                }
            }
        }
    };

    return (
      <div className="chart-container">
      <div style={{ width:'700px' }}>
          <Pie data={data} options={options} />
      </div>
  </div>
    );
};

export default ChartTokenomics;
