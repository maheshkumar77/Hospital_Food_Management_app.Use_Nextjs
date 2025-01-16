"use client";

import React, { useEffect, useState } from "react";

const InnerPantryDashboard = () => {
  const [posts, setPosts] = useState([]); // Store all posts data here
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/user");

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        console.log("Fetched data:", data); // Log full response for debugging

        // Check if posts are available and update state
        if (data.posts && data.posts.length > 0) {
          setPosts(data.posts);
          setLoading(false);
        } else {
          console.log("No posts found or posts array is empty.");
          setError("Posts data is missing or empty");
          setLoading(false);
        }
      } catch (err) {
        console.error("Error loading data:", err);
        setError("Failed to load data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Inner Pantry Dashboard</h1>

      {/* Meal Stats Section */}
      <section className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-2xl font-semibold mb-4">Meal Preparation Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div key={index} className="bg-blue-100 p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Total Meals</h3>
              <p className="text-3xl font-bold">{post.food.length || "N/A"}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Delivery Status Section */}
      <section className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-2xl font-semibold mb-4">Delivery Status</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Meal</th>
                <th className="py-2 px-4 border">Status</th>
                <th className="py-2 px-4 border">Delivery Time</th>
                <th className="py-2 px-4 border">Delivery Personnel</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => (
                post.food.map((meal, mealIndex) => (
                  <tr key={`${index}-${mealIndex}`}>
                    <td className="py-2 px-4 border">{meal.mealName || "N/A"}</td>
                    <td
                      className={`py-2 px-4 border ${
                        post.trackfood === "Delayed" ? "text-red-500" : "text-green-500"
                      }`}
                    >
                      {post.trackfood || "N/A"}
                    </td>
                    <td className="py-2 px-4 border">{post.deltime || "N/A"}</td>
                    <td className="py-2 px-4 border">{post.delname || "N/A"}</td>
                  </tr>
                ))
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Delivery Personnel Section */}
      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Delivery Personnel</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Assigned Meals</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border">{post.asigncname || "N/A"}</td>
                  <td className="py-2 px-4 border">
                    {post.food.length > 0 ? post.food.map(meal => meal.mealName).join(", ") : "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default InnerPantryDashboard;
