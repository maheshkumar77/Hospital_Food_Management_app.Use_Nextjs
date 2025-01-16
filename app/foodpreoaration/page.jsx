"use client";
import React, { useEffect, useState } from 'react';

const TrackFood = () => {
  const [patientData, setPatientData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch patient data from backend
//   useEffect(() => {
//     // Replace this URL with your backend API endpoint
//     const fetchPatientData = async () => {
//       try {
//         const response = await fetch('/api/patient/1'); // Sample API endpoint for patient data
//         if (!response.ok) {
//           throw new Error('Failed to fetch patient data');
//         }
//         const data = await response.json();
//         setPatientData(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPatientData();
//   }, []);

//   if (loading) {
//     return (
//       <div className="text-center p-6">
//         <p>Loading patient data...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-center p-6">
//         <p className="text-red-600">Error: {error}</p>
//       </div>
//     );
//   }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-center mb-6">Patient Food Tracking</h2>

      <div className="space-y-4">
        <div className="flex justify-between">
          <p><strong>Patient Name:</strong>Mahesh </p>
          <p><strong>Room Number:</strong>789 </p>
        </div>
        <div className="flex justify-between">
          <p><strong>Food Details:</strong>45 </p>
          <p><strong>Allergies:</strong>455 </p>
        </div>
        <div className="flex justify-between">
          <p><strong>Specific Instructions:</strong>455 </p>
        </div>
        <div className="flex justify-between">
          <p><strong>Food Status:</strong>4588</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-2xl font-semibold text-gray-800">Track the Food Processing</h3>
        <div className="mt-4">
          <p className="text-lg font-medium">Current Status: 4545</p>
        </div>
      </div>
    </div>
  );
};

export default TrackFood;
