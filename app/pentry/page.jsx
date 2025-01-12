 "use client"
// import Link from 'next/link';
// import React, { useEffect, useState } from 'react';

// const Pentry = () => {

//       const response = await fetch(`http://localhost:3000/api/user`, {
//         method: 'get',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//  })


// return (
//   <div className="container mx-auto px-4 py-8">
//     <h1 className="text-3xl font-bold text-center mb-8">Hospital Food Management <Link href="pentry2" className=' ml-11 px-4 py-4 bg-black text-white text-xl'> Dashbord</Link></h1>

//     {/* Food Preparation Tasks */}
//     <section className="mb-12">
//       <h2 className="text-2xl font-semibold mb-4">Food Preparation Tasks</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full table-auto">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border">Meal</th>
//               <th className="py-2 px-4 border">Patient</th>
//               <th className="py-2 px-4 border">Room No</th>
//               <th className="py-2 px-4 border">Status</th>
//               <th className="py-2 px-4 border">Meal time</th>
//             </tr>
//           </thead>
//           <tbody>
//             {mealTasks.map(task => (
//               <tr key={task.id}>
//                 <td className="py-2 px-4 border">{task.meal}</td>
//                 <td className="py-2 px-4 border">{task.patient}</td>
//                 <td className="py-2 px-4 border">{task.room}</td>
//                 <td className="py-2 px-4 border">{task.status}</td>
//                 <td className="py-2 px-4 border">
//                   <button
//                     onClick={() => updateMealStatus(task.id, 'In Progress')}
//                     className="bg-yellow-500 text-white py-1 px-3 rounded-lg hover:bg-yellow-600"
//                   >
//                     Start
//                   </button>
//                   <button
//                     onClick={() => updateMealStatus(task.id, 'Completed')}
//                     className="bg-green-500 text-white py-1 px-3 ml-2 rounded-lg hover:bg-green-600"
//                   >
//                     Complete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </section>

//     {/* Delivery Personnel Management */}
//     <section className="mb-12">
//       <h2 className="text-2xl font-semibold mb-4">Delivery Personnel Management</h2>
//       <div className="mb-4">
//         <input
//           type="text"
//           value={newPersonnel.name}
//           onChange={(e) => setNewPersonnel({ ...newPersonnel, name: e.target.value })}
//           placeholder="Name"
//           className="border p-2 mr-2 rounded-lg"
//         />
//         <input
//           type="text"
//           value={newPersonnel.contactInfo}
//           onChange={(e) => setNewPersonnel({ ...newPersonnel, contactInfo: e.target.value })}
//           placeholder="Contact Info"
//           className="border p-2 mr-2 rounded-lg"
//         />
//         <input
//           type="text"
//           value={newPersonnel.details}
//           onChange={(e) => setNewPersonnel({ ...newPersonnel, details: e.target.value })}
//           placeholder="Other Details"
//           className="border p-2 mr-2 rounded-lg"
//         />
//         <button
//           onClick={addDeliveryPersonnel}
//           className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
//         >
//           Add Personnel
//         </button>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="min-w-full table-auto">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border">Name</th>
//               <th className="py-2 px-4 border">Contact Info</th>
//               <th className="py-2 px-4 border">Details</th>
//             </tr>
//           </thead>
//           <tbody>
//             {deliveryPersonnel.map(person => (
//               <tr key={person.id}>
//                 <td className="py-2 px-4 border">{person.name}</td>
//                 <td className="py-2 px-4 border">{person.contactInfo}</td>
//                 <td className="py-2 px-4 border">{person.details}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </section>

//     {/* Meal Delivery Tracking */}
//     <section>
//       <h2 className="text-2xl font-semibold mb-4">Meal Deliveries Tracking</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full table-auto">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border">Meal</th>
//               <th className="py-2 px-4 border">Patient</th>
//               <th className="py-2 px-4 border">Room No</th>
//               <th className="py-2 px-4 border">Delivered</th>
//               <th className="py-2 px-4 border">Mark as Delivered</th>
//             </tr>
//           </thead>
//           <tbody>
//             {mealDeliveries.map(delivery => (
//               <tr key={delivery.id}>
//                 <td className="py-2 px-4 border">{delivery.meal}</td>
//                 <td className="py-2 px-4 border">{delivery.patient}</td>
//                 <td className="py-2 px-4 border">{delivery.room}</td>
//                 <td className="py-2 px-4 border">
//                   {delivery.delivered ? 'Yes' : 'No'}
//                 </td>
//                 <td className="py-2 px-4 border">
//                   {!delivery.delivered && (
//                     <button
//                       onClick={() => markAsDelivered(delivery.id)}
//                       className="bg-green-500 text-white py-1 px-3 rounded-lg hover:bg-green-600"
//                     >
//                       Mark as Delivered
//                     </button>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   </div>)
// }

// export default Pentry

import React from 'react';

const page = () => {
  return (
    <div className="h-auto w-full bg-gray-100 flex justify-center items-center py-8 flex-col">
      <div className="flex flex-row w-full max-w-6xl bg-white shadow-lg rounded-lg p-8 space-x-6">

        {/* Patient Info Section */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md flex-1">
          <h1 className="text-2xl font-semibold text-center text-blue-600 mb-4">Patient Info</h1>
          <div className="space-y-2">
            <p className="text-lg font-medium">Name: <span className="text-gray-700">John Doe</span></p>
            <p className="text-lg font-medium">Age: <span className="text-gray-700">45</span></p>
            <p className="text-lg font-medium">Room No: <span className="text-gray-700">101</span></p>
            <p className="text-lg font-medium">Diagnosis: <span className="text-gray-700">Flu</span></p>
          </div>
        </div>

        {/* Food Details Section */}
        <div className="bg-green-50 p-6 rounded-lg shadow-md flex-1">
          <h1 className="text-2xl font-semibold text-center text-green-600 mb-4">Food Details</h1>
          <div className="space-y-2">
            <p className="text-lg font-medium">Meal: <span className="text-gray-700">Vegetable Soup</span></p>
            <p className="text-lg font-medium">Meal Type: <span className="text-gray-700">Vegan</span></p>
            <p className="text-lg font-medium">Time: <span className="text-gray-700">12:30 PM</span></p>
            <p className="text-lg font-medium">Dietary Restrictions: <span className="text-gray-700">None</span></p>
          </div>
        </div>

        {/* Status Section */}
        <div className="bg-yellow-50 p-6 rounded-lg shadow-md flex-1">
          <h1 className="text-2xl font-semibold text-center text-yellow-600 mb-4">Status</h1>
          <div className="space-y-3">
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">Ready to Prepare</button>
            <button className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition">In Progress</button>
            <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">Completed</button>
            <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">Cancelled</button>
          </div>
        </div>

      </div>

      
<div className=' flex justify-between h-auto w-auto'>
   {/* Cook Info Section */}
   <div className="bg-white shadow-md p-6 mt-8 rounded-lg flex flex-col space-y-4 max-w-3xl mx-auto float-start">
        <h2 className="text-xl font-semibold text-center text-blue-600">Cook Information</h2>
        <label className="text-lg font-medium text-gray-700">Cook Name</label>
        <input 
          type="text" 
          placeholder="Enter cook name" 
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <label className="text-lg font-medium text-gray-700">Cook Contact Info</label>
        <input 
          type="text" 
          placeholder="Enter cook contact info" 
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition">
          Asign
        </button>
      </div>

      {/* Delivery Info Section */}
      <div className="bg-white shadow-md p-6 mt-8 rounded-lg flex flex-col space-y-4 max-w-3xl mx-auto float-end">
        <h2 className="text-xl font-semibold text-center text-green-600">Delivery Information</h2>
        <label className="text-lg font-medium text-gray-700">Delivery Name</label>
        <input 
          type="text" 
          placeholder="Enter delivery name" 
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
        />
        <label className="text-lg font-medium text-gray-700">Delivery Contact Info</label>
        <input 
          type="text" 
          placeholder="Enter delivery contact info" 
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
        />
        <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition">
          Ready to Deliver
        </button>
      </div>

</div>
         </div>
  );
};

export default page;

