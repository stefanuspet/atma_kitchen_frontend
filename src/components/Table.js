// // src/components/Table.js
// import React from 'react';
// import { salesData } from '../data';

// const Table = () => {
//   return (
//     <div className="my-8">
//       <h2 className="text-2xl font-bold mb-4">Laporan Penjualan Bulanan</h2>
//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 border-b">Bulan</th>
//             <th className="py-2 px-4 border-b">Jumlah Transaksi</th>
//             <th className="py-2 px-4 border-b">Jumlah Uang</th>
//           </tr>
//         </thead>
//         <tbody>
//           {salesData.map((data, index) => (
//             <tr key={index} className="hover:bg-gray-100">
//               <td className="py-2 px-4 border-b">{data.month}</td>
//               <td className="py-2 px-4 border-b">{data.transactions}</td>
//               <td className="py-2 px-4 border-b">
//                 {data.amount.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;
