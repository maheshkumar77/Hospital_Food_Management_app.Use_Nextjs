"use client"
import React, { useState } from "react";

const InnerPantryDashboard = () => {
  // Sample data for meal deliveries and delivery personnel
  const [mealDeliveries, setMealDeliveries] = useState([
    { id: 1, patient: "John Doe", meal: "Rice", status: "In Progress", assignedTo: "Alice", deliveryTime: "2025-01-10 08:30" },
    { id: 2, patient: "Jane Doe", meal: "Soup", status: "Pending", assignedTo: "Bob", deliveryTime: null },
    { id: 3, patient: "Mark Smith", meal: "Salad", status: "Delivered", assignedTo: "Charlie", deliveryTime: "2025-01-10 09:00" },
  ]);

  const [deliveryPersonnel, setDeliveryPersonnel] = useState([
    { id: 1, name: "Alice", assignedMeals: 5, status: "Active" },
    { id: 2, name: "Bob", assignedMeals: 3, status: "Inactive" },
    { id: 3, name: "Charlie", assignedMeals: 7, status: "Active" },
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Inner Pantry Dashboard</h1>

      {/* Meal Delivery Status Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Monitor Meal Preparation & Delivery</h2>
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-4">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Patient</th>
                <th className="py-2 px-4 border">Meal</th>
                <th className="py-2 px-4 border">Assigned To</th>
                <th className="py-2 px-4 border">Status</th>
                <th className="py-2 px-4 border">Delivery Time</th>
              </tr>
            </thead>
            <tbody>
              {mealDeliveries.map((delivery) => (
                <tr key={delivery.id}>
                  <td className="py-2 px-4 border">{delivery.patient}</td>
                  <td className="py-2 px-4 border">{delivery.meal}</td>
                  <td className="py-2 px-4 border">{delivery.assignedTo}</td>
                  <td className="py-2 px-4 border">
                    {delivery.status === "In Progress" && (
                      <span className="text-yellow-500 font-semibold">{delivery.status}</span>
                    )}
                    {delivery.status === "Delivered" && (
                      <span className="text-green-500 font-semibold">{delivery.status}</span>
                    )}
                    {delivery.status === "Pending" && (
                      <span className="text-red-500 font-semibold">{delivery.status}</span>
                    )}
                  </td>
                  <td className="py-2 px-4 border">{delivery.deliveryTime || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Delivery Personnel Management Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Manage Delivery Personnel</h2>
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-4">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Assigned Meals</th>
                <th className="py-2 px-4 border">Status</th>
                <th className="py-2 px-4 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {deliveryPersonnel.map((person) => (
                <tr key={person.id}>
                  <td className="py-2 px-4 border">{person.name}</td>
                  <td className="py-2 px-4 border">{person.assignedMeals}</td>
                  <td className="py-2 px-4 border">
                    {person.status === "Active" ? (
                      <span className="text-green-500 font-semibold">{person.status}</span>
                    ) : (
                      <span className="text-gray-500 font-semibold">{person.status}</span>
                    )}
                  </td>
                  <td className="py-2 px-4 border">
                    <button className="text-blue-500 hover:text-blue-700">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Real-time Updates Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Real-time Delivery Updates</h2>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <div className="flex flex-col gap-4">
            {mealDeliveries.filter((delivery) => delivery.status === "In Progress").map((delivery) => (
              <div key={delivery.id} className="flex justify-between items-center border p-4 rounded-lg shadow">
                <p className="text-lg font-semibold">{delivery.patient} - {delivery.meal}</p>
                <span className="text-yellow-500 font-semibold">In Progress</span>
              </div>
            ))}
            {mealDeliveries.filter((delivery) => delivery.status === "Pending").map((delivery) => (
              <div key={delivery.id} className="flex justify-between items-center border p-4 rounded-lg shadow">
                <p className="text-lg font-semibold">{delivery.patient} - {delivery.meal}</p>
                <span className="text-red-500 font-semibold">Pending</span>
              </div>
            ))}
            {mealDeliveries.filter((delivery) => delivery.status === "Delivered").map((delivery) => (
              <div key={delivery.id} className="flex justify-between items-center border p-4 rounded-lg shadow">
                <p className="text-lg font-semibold">{delivery.patient} - {delivery.meal}</p>
                <span className="text-green-500 font-semibold">Delivered</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnerPantryDashboard;
