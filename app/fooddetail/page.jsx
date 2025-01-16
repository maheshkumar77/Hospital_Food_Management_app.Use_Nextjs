"use client"
import React, { useState } from 'react';

const MealOrderForm = () => {
  const [formData, setFormData] = useState({
    roomNo: '',
    bedNo: '',
    ingredients: '',
    contactInfo: '',
    instructions: '',
    floorNo: '',
    mealPlan: [],
    selectedHotel: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked
          ? [...formData[name], value]
          : formData[name].filter((plan) => plan !== value),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can handle form submission here, such as sending the data to an API.
  };

  return (
    <div className="p-4 max-w-lg mx-auto bg-white border rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-center mb-6">Meal Order Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Room Number */}
        <div className="mb-4">
          <label htmlFor="roomNo" className="block text-sm font-medium text-gray-700">
            Room Number
          </label>
          <input
            type="text"
            id="roomNo"
            name="roomNo"
            value={formData.roomNo}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        {/* Bed Number */}
        <div className="mb-4">
          <label htmlFor="bedNo" className="block text-sm font-medium text-gray-700">
            Bed Number
          </label>
          <input
            type="text"
            id="bedNo"
            name="bedNo"
            value={formData.bedNo}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        {/* Specify Ingredients */}
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
            Specify Ingredients for Each Meal
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        {/* Contact Info */}
        <div className="mb-4">
          <label htmlFor="contactInfo" className="block text-sm font-medium text-gray-700">
            Contact Info
          </label>
          <input
            type="text"
            id="contactInfo"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        {/* Specific Instructions */}
        <div className="mb-4">
          <label htmlFor="instructions" className="block text-sm font-medium text-gray-700">
            Specific Instructions
          </label>
          <textarea
            id="instructions"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        {/* Floor Number */}
        <div className="mb-4">
          <label htmlFor="floorNo" className="block text-sm font-medium text-gray-700">
            Floor Number
          </label>
          <input
            type="text"
            id="floorNo"
            name="floorNo"
            value={formData.floorNo}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

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
                checked={formData.mealPlan.includes('Morning')}
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
                checked={formData.mealPlan.includes('Evening')}
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
                checked={formData.mealPlan.includes('Night')}
                onChange={handleChange}
              />
              <label htmlFor="night" className="text-sm ml-2">Night</label>
            </div>
          </div>
        </div>

        {/* Hotel Selection */}
        <div className="mb-4">
          <label htmlFor="hotel" className="block text-sm font-medium text-gray-700">
            Select Hotel
          </label>
          <select
            id="hotel"
            name="selectedHotel"
            value={formData.selectedHotel}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          >
            <option value="">Select a Hotel</option>
            <option value="hotel1">Hotel 1</option>
            <option value="hotel2">Hotel 2</option>
            <option value="hotel3">Hotel 3</option>
          </select>
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

export default MealOrderForm;
