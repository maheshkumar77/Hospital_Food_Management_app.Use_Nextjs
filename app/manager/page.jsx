"use client";

import React, { useEffect, useState } from "react";

const Manager = () => {
  // State variables to hold fetched data
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch consolidated data from backend API
        const res = await fetch("http://localhost:3000/api/user");
        const data = await res.json();
        console.log(data);

        // Assuming the response structure has these properties
        setPosts(data.posts || []); // Default to empty array if undefined
        setLoading(false); // Set loading to false once data is fetched
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  // If loading, show loading message
  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  // If there is an error, show error message
  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

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
                <th className="py-2 px-4 border">Meal</th>
                <th className="py-2 px-4 border">Status</th>
                <th className="py-2 px-4 border">Delivered At</th>
                <th className="py-2 px-4 border">Patient</th>
                <th className="py-2 px-4 border">Delay Alert</th>
              </tr>
            </thead>
            <tbody>
              {posts.length > 0 ? (
                posts.map((post) =>
                  post.food.map((meal) => (
                    <tr key={meal._id}>
                      <td className="py-2 px-4 border">{meal.mealName}</td>
                      <td className="py-2 px-4 border">{post.trackfood}</td>
                      <td className="py-2 px-4 border">{meal.deliveredAt || "N/A"}</td>
                      <td className="py-2 px-4 border">{post.name}</td>
                      <td className="py-2 px-4 border">
                        {meal.count > 0 ? (
                          <span className="text-green-500 font-semibold">Delivered</span>
                        ) : (
                          <span className="text-red-500 font-semibold">Delayed</span>
                        )}
                      </td>
                    </tr>
                  ))
                )
              ) : (
                <tr>
                  <td colSpan="5" className="py-2 px-4 text-center text-gray-500">
                    No deliveries to show.
                  </td>
                </tr>
              )}
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
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Room</th>
                <th className="py-2 px-4 border">Diet Chart</th>
                <th className="py-2 px-4 border">Diseases</th>
                <th className="py-2 px-4 border">Allergies</th>
              </tr>
            </thead>
            <tbody>
              {posts.length > 0 ? (
                posts.map((post) => (
                  <tr key={post._id}>
                    <td className="py-2 px-4 border">{post.name}</td>
                    <td className="py-2 px-4 border">{post.roomno}</td>
                    <td className="py-2 px-4 border">
                      {post.food?.map((item) => item.mealName).join(", ") || "N/A"}
                    </td>
                    <td className="py-2 px-4 border">{post.diseases || "N/A"}</td>
                    <td className="py-2 px-4 border">{post.allergies || "N/A"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="py-2 px-4 text-center text-gray-500">
                    No patient details to show.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Pantry Performance Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Pantry Performance</h2>
        <div className="bg-white shadow-lg rounded-lg p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-4 bg-blue-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Total Meals Prepared</h3>
            <p className="text-3xl font-bold">
              {posts.reduce((total, post) => total + post.food.length, 0) || "N/A"}
            </p>
          </div>
          <div className="p-4 bg-green-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Meals Delivered</h3>
            <p className="text-3xl font-bold">
              {posts.reduce(
                (total, post) => total + post.food.filter((meal) => meal.count > 0).length,
                0
              ) || "N/A"}
            </p>
          </div>
          <div className="p-4 bg-yellow-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Pending Meals</h3>
            <p className="text-3xl font-bold">
              {posts.reduce(
                (total, post) => total + post.food.filter((meal) => meal.count === 0).length,
                0
              ) || "N/A"}
            </p>
          </div>
        </div>
      </section>

      {/* Alerts Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Alerts</h2>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <ul>
            {posts.length > 0 &&
              posts
                .flatMap((post) =>
                  post.food.filter((meal) => meal.count === 0).map((alert) => ({
                    patient: post.name,
                    mealName: alert.mealName,
                  }))
                )
                .map((alert, index) => (
                  <li
                    key={index}
                    className="py-2 px-4 border border-red-300 text-red-600 font-semibold"
                  >
                    Delivery for {alert.patient} is delayed. Meal: {alert.mealName}
                  </li>
                ))}
            {posts.length === 0 && (
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
