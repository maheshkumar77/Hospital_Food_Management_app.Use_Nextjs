"use client"
import React, { useState } from 'react';

const PatientForm = () => {
  const [patientData, setPatientData] = useState({
    name: '',
    diseases: '',
    allergies: '',
    roomNo: '',
    bedno: '',
    florno: '',
    age: '',
    gender: '',
    contactinfo: '',
   emergencycontact: '',
    others: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setPatientData({
        ...patientData,
        [name]: checked
          ? [...patientData[name], value]
          : patientData[name].filter((plan) => plan !== value),
      });
    } else {
      setPatientData({
        ...patientData,
        [name]: value,
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your backend API
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(patientData), // Send the patientData in the body of the request
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Data submitted successfully:', responseData);
        // Optionally, handle success (e.g., show a success message)
      } else {
        const errorData = await response.json();
        console.log('Error:', errorData);
        // Optionally, handle error (e.g., show an error message)
      }
    } catch (error) {
      console.error('Error while submitting form:', error);
      // Optionally, handle network error (e.g., show an error message)
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto bg-white border rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-center mb-6">Patient Information & Food/Diet Chart</h2>
      <form onSubmit={handleSubmit}>
        {/* Patient Information */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Patient Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={patientData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        {/* Additional form fields... */}

        {/* Meal Plans - Checkboxes */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Meal Plan</label>
          <div className="flex gap-4">
            <div>
              <input
                type="checkbox"
                id="morning"
                name="mealPlan"
                value="Morning"
                checked={patientData.mealPlan.includes('Morning')}
                onChange={handleChange}
              />
              <label htmlFor="morning" className="text-sm ml-2">Morning</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="evening"
                name="mealPlan"
                value="Evening"
                checked={patientData.mealPlan.includes('Evening')}
                onChange={handleChange}
              />
              <label htmlFor="evening" className="text-sm ml-2">Evening</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="night"
                name="mealPlan"
                value="Night"
                checked={patientData.mealPlan.includes('Night')}
                onChange={handleChange}
              />
              <label htmlFor="night" className="text-sm ml-2">Night</label>
            </div>
          </div>
        </div>

        {/* Ingredients and Specific Instructions */}
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
            Specify Ingredients for Each Meal
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={patientData.ingredients}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="specificInstructions" className="block text-sm font-medium text-gray-700">
            Include Specific Instructions
          </label>
          <textarea
            id="specificInstructions"
            name="specificInstructions"
            value={patientData.specificInstructions}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PatientForm;
