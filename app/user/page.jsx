"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';


const User = () => {
  const [patientData, setPatientData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await fetch('/api/user'); // Assuming the GET route is available at this endpoint
        const data = await response.json();
        
        if (response.ok) {
          setPatientData(data.posts); // Assuming the data structure has a "posts" array
        } else {
          setError(data.error || 'Failed to fetch data');
        }
      } catch (err) {
        setError('Something went wrong while fetching data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPatientData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-col h-full min-h-screen justify-center items-center bg-gray-50">
      {/* Button Section */}
      <div className="flex justify-evenly w-[80%] max-w-6xl py-8 space-x-6">
        <Link href="/Userdetl" className="px-6 py-4 bg-black text-2xl text-white font-semibold rounded-2xl hover:bg-gray-800 transition-all duration-300">
          User Details
        </Link>
        <Link href="/fooddetail" className="px-6 py-4 bg-black text-2xl text-white font-semibold rounded-2xl hover:bg-gray-800 transition-all duration-300">
        Order Food
        </Link>
       
        <Link href="/foodpreoaration" className="px-6 py-4 bg-black text-2xl text-white font-semibold rounded-2xl hover:bg-gray-800 transition-all duration-300">
          Delyvery details
        </Link>
      </div>

      {/* User Info Section */}
      <div className="flex justify-center items-center w-[80%] max-w-6xl mt-8 border border-gray-300 shadow-lg rounded-xl p-6 bg-white">
      {/* Left section with circular avatar */}
      {patientData && patientData.length > 0 ? (
        patientData.map((patient) => (
          <div key={patient._id} className="flex flex-col justify-center items-center w-1/3 p-4">
            <div className="w-24 h-24 rounded-full bg-blue-900 flex justify-center items-center text-4xl text-white">
              {/* Assuming you are displaying the first letter of the patient's name */}
              {patient.name.charAt(0)}
            </div>
            <div className="mt-4 text-center">
              <p className="text-xl font-semibold">{patient.name}</p>
              <p className="text-sm text-gray-500">Disease: {patient.diseases}</p>
              <p className="text-sm text-gray-500">Room No: {patient.roomno}</p>
              <p className="text-sm text-gray-500">Bed No: {patient.bedno}</p>
              <p className="text-sm text-gray-500">Contact Info: {patient.contactinfo}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No patient data available</p>
      )}

      {/* Right section with food details */}
      {patientData && patientData.length > 0 && (
        <div className="flex flex-col justify-center items-start w-2/3 space-y-4 p-4 border-l border-gray-200">
          <p className="text-lg font-semibold text-gray-700">Food Details</p>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">Food: {patientData[0].other.food || 'N/A'}</p>
            <p className="text-sm text-gray-600">Meal Time: {patientData[0].other.mealtime || 'N/A'}</p>
            <p className="text-sm text-gray-600">Specific Ingredients: {patientData[0].other.ingredients || 'N/A'}</p>
            <p className="text-sm text-gray-600">Specific Instructions: {patientData[0].other.instructions || 'N/A'}</p>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default User;
