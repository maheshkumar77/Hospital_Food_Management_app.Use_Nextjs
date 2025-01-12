"use client"
import React, { useState } from "react";

const Manager = () => {
  // Sample data (you can replace this with real data from an API or database)
  const [mealDeliveries, setMealDeliveries] = useState([
    { id: 1, patient: "John Doe", meal: "Rice", status: "Delivered", deliveredAt: "2025-01-10 08:30", delay: false },
    { id: 2, patient: "Jane Doe", meal: "Soup", status: "Pending", deliveredAt: null, delay: true },
    { id: 3, patient: "Mark Smith", meal: "Salad", status: "Delivered", deliveredAt: "2025-01-10 09:00", delay: false },
  ]);

  const [patientDetails, setPatientDetails] = useState([
    { id: 1, name: "John Doe", room: "101", dietChart: "Low Sodium, Gluten-Free" },
    { id: 2, name: "Jane Doe", room: "102", dietChart: "High Protein" },
    { id: 3, name: "Mark Smith", room: "103", dietChart: "Vegetarian" },
  ]);

  const [pantryStats, setPantryStats] = useState({
    totalMealsPrepared: 120,
    totalMealsDelivered: 110,
    pendingMeals: 10,
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Hospital Food Manager Dashboard</h1>

      {/* Food Deliveries Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Track Food Deliveries</h2>
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-4">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Patient</th>
                <th className="py-2 px-4 border">Meal</th>
                <th className="py-2 px-4 border">Status</th>
                <th className="py-2 px-4 border">Delivered At</th>
                <th className="py-2 px-4 border">Delay Alert</th>
              </tr>
            </thead>
            <tbody>
              {mealDeliveries.map((delivery) => (
                <tr key={delivery.id}>
                  <td className="py-2 px-4 border">{delivery.patient}</td>
                  <td className="py-2 px-4 border">{delivery.meal}</td>
                  <td className="py-2 px-4 border">{delivery.status}</td>
                  <td className="py-2 px-4 border">{delivery.deliveredAt || "N/A"}</td>
                  <td className="py-2 px-4 border">
                    {delivery.delay ? (
                      <span className="text-red-500 font-semibold">Delayed</span>
                    ) : (
                      <span className="text-green-500 font-semibold">On Time</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Patient Details & Diet Charts Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Patient Details and Diet Charts</h2>
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-4">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Patient</th>
                <th className="py-2 px-4 border">Room</th>
                <th className="py-2 px-4 border">Diet Chart</th>
              </tr>
            </thead>
            <tbody>
              {patientDetails.map((patient) => (
                <tr key={patient.id}>
                  <td className="py-2 px-4 border">{patient.name}</td>
                  <td className="py-2 px-4 border">{patient.room}</td>
                  <td className="py-2 px-4 border">{patient.dietChart}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Pantry Performance Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Monitor Pantry Performance</h2>
        <div className="bg-white shadow-lg rounded-lg p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-4 bg-blue-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Total Meals Prepared</h3>
            <p className="text-3xl font-bold">{pantryStats.totalMealsPrepared}</p>
          </div>
          <div className="p-4 bg-green-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Meals Delivered</h3>
            <p className="text-3xl font-bold">{pantryStats.totalMealsDelivered}</p>
          </div>
          <div className="p-4 bg-yellow-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Pending Meals</h3>
            <p className="text-3xl font-bold">{pantryStats.pendingMeals}</p>
          </div>
        </div>
      </section>

      {/* Alerts Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Alerts</h2>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <ul>
            {mealDeliveries.filter((delivery) => delivery.delay).map((alert) => (
              <li key={alert.id} className="py-2 px-4 border border-red-300 text-red-600 font-semibold">
                Delivery for {alert.patient} is delayed. Meal: {alert.meal}
              </li>
            ))}
            {mealDeliveries.filter((delivery) => !delivery.delay).length === 0 && (
              <li className="py-2 px-4 border border-green-300 text-green-600 font-semibold">
                All meals are delivered on time.
              </li>
            )}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Manager;
