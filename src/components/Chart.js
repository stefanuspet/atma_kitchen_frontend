// // src/components/Chart.js
// import React from 'react';
// import { Bar } from 'react-chartjs-2';
// import { salesData } from '../data';

// const Chart = () => {
//   const data = {
//     labels: salesData.map(data => data.month),
//     datasets: [
//       {
//         label: 'Jumlah Uang (IDR)',
//         data: salesData.map(data => data.amount),
//         backgroundColor: 'rgba(75, 192, 192, 0.6)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//         ticks: {
//           callback: function(value) {
//             return value.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
//           }
//         }
//       }
//     },
//   };

//   return (
//     <div className="my-8">
//       <h2 className="text-2xl font-bold mb-4">Grafik Penjualan Bulanan</h2>
//       <div className="w-full lg:w-3/4 mx-auto">
//         <Bar data={data} options={options} />
//       </div>
//     </div>
//   );
// };

// export default Chart;
