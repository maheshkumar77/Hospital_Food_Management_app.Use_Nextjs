"use client"
import React, { useState } from 'react';

const PatientForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    diseases: '',
    allergies: '',
    roomno: '',
    bedno: '',
    florno: '',
    age: '',
    gender: '',
    contactinfo: '',
    emergencycontact: '',
    other: '',
    food: [
      {
        mealName: '',
        ingredients: '',
        specificInstructions: '',
        mealtime: {
          morning: false,
          evening: false,
          night: false,
        },
        count: 0
      }
    ] // Initial empty food entry
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle food input changes
  const handleFoodChange = (e, index) => {
    const { name, value } = e.target;
    const updatedFood = [...formData.food];
    updatedFood[index][name] = value;
    setFormData({
      ...formData,
      food: updatedFood
    });
  };

  // Handle mealtime checkbox change
  const handleMealTimeChange = (e, index) => {
    const { name, checked } = e.target;
    const updatedFood = [...formData.food];
    updatedFood[index].mealtime[name] = checked;

    // Make sure only one meal time is selected at a time
    if (checked) {
      // Deselect other meal times
      if (name !== 'morning') updatedFood[index].mealtime.morning = false;
      if (name !== 'evening') updatedFood[index].mealtime.evening = false;
      if (name !== 'night') updatedFood[index].mealtime.night = false;
    }

    setFormData({
      ...formData,
      food: updatedFood
    });
  };

  // Add a new food entry
  const addFood = () => {
    setFormData({
      ...formData,
      food: [
        ...formData.food,
        {
          mealName: '',
          ingredients: '',
          specificInstructions: '',
          mealtime: { morning: false, evening: false, night: false },
          count: 0
        }
      ]
    });
  };

  // Remove a food entry
  const removeFood = (index) => {
    const updatedFood = formData.food.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      food: updatedFood
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setResponseMessage(null);

    // Send the form data to the API route
    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setResponseMessage({ type: 'success', message: data.message });
      } else {
        setResponseMessage({ type: 'error', message: data.error || 'Unknown error' });
      }
    } catch (error) {
      setResponseMessage({ type: 'error', message: 'Failed to submit data' });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Patient Information</h2>
      <form onSubmit={handleSubmit}>
        {/* Patient Info Fields */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Patient Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="diseases" className="block text-sm font-medium text-gray-700">Diseases</label>
          <input
            type="text"
            id="diseases"
            name="diseases"
            value={formData.diseases}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="allergies" className="block text-sm font-medium text-gray-700">Allergies</label>
          <input
            type="text"
            id="allergies"
            name="allergies"
            value={formData.allergies}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="roomno" className="block text-sm font-medium text-gray-700">Room Number</label>
          <input
            type="text"
            id="roomno"
            name="roomno"
            value={formData.roomno}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="bedno" className="block text-sm font-medium text-gray-700">Bed Number</label>
          <input
            type="text"
            id="bedno"
            name="bedno"
            value={formData.bedno}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="florno" className="block text-sm font-medium text-gray-700">Floor Number</label>
          <input
            type="text"
            id="florno"
            name="florno"
            value={formData.florno}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="contactinfo" className="block text-sm font-medium text-gray-700">Contact Information</label>
          <input
            type="text"
            id="contactinfo"
            name="contactinfo"
            value={formData.contactinfo}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="emergencycontact" className="block text-sm font-medium text-gray-700">Emergency Contact</label>
          <input
            type="text"
            id="emergencycontact"
            name="emergencycontact"
            value={formData.emergencycontact}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="other" className="block text-sm font-medium text-gray-700">Other Details</label>
          <textarea
            id="other"
            name="other"
            value={formData.other}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Food Details */}
               {/* Food Details */}
               <div className="mb-4">
          <h3 className="text-xl font-semibold mb-3">Food Details</h3>
          {formData.food.map((food, index) => (
            <div key={index} className="mb-4 p-4 border rounded-md">
              <div className="mb-4">
                <label htmlFor={`mealName-${index}`} className="block text-sm font-medium text-gray-700">Meal Name</label>
                <input
                  type="text"
                  id={`mealName-${index}`}
                  name="mealName"
                  value={food.mealName}
                  onChange={(e) => handleFoodChange(e, index)}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="mb-4">
                <label htmlFor={`ingredients-${index}`} className="block text-sm font-medium text-gray-700">Ingredients</label>
                <input
                  type="text"
                  id={`ingredients-${index}`}
                  name="ingredients"
                  value={food.ingredients}
                  onChange={(e) => handleFoodChange(e, index)}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="mb-4">
                <label htmlFor={`specificInstructions-${index}`} className="block text-sm font-medium text-gray-700">Specific Instructions</label>
                <input
                  type="text"
                  id={`specificInstructions-${index}`}
                  name="specificInstructions"
                  value={food.specificInstructions}
                  onChange={(e) => handleFoodChange(e, index)}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="mb-4">
                <label htmlFor={`count-${index}`} className="block text-sm font-medium text-gray-700">Count</label>
                <input
                  type="number"
                  id={`count-${index}`}
                  name="count"
                  value={food.count}
                  onChange={(e) => handleFoodChange(e, index)}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Meal Time Checkbox */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Meal Time</label>
                <div className="flex space-x-4">
                  <div>
                    <input
                      type="checkbox"
                      id={`morning-${index}`}
                      name="morning"
                      checked={food.mealtime.morning}
                      onChange={(e) => handleMealTimeChange(e, index)}
                    />
                    <label htmlFor={`morning-${index}`} className="ml-2">Morning</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id={`evening-${index}`}
                      name="evening"
                      checked={food.mealtime.evening}
                      onChange={(e) => handleMealTimeChange(e, index)}
                    />
                    <label htmlFor={`evening-${index}`} className="ml-2">Evening</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id={`night-${index}`}
                      name="night"
                      checked={food.mealtime.night}
                      onChange={(e) => handleMealTimeChange(e, index)}
                    />
                    <label htmlFor={`night-${index}`} className="ml-2">Night</label>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => removeFood(index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove Food
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={addFood}
            className="mt-2 text-blue-500 hover:text-blue-700"
          >
            Add Another Food
          </button>
        </div>
        {/* Response Message */}
        {responseMessage && (
          <div className={`mt-4 p-3 rounded-md ${responseMessage.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {responseMessage.message}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 rounded-md ${isSubmitting ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default PatientForm;
