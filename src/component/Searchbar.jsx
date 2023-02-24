/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import React from "react";
const sushiPicture = new URL(
  "https://images.unsplash.com/photo-1617196034738-26c5f7c977ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
);

export default function Searchbar() {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center bg-cover bg-center h-[calc(100vh-200px)] min-h-[400px]"
        style={{ backgroundImage: "url('./images/sushi1.jpg')" }}
      >
        <div className="text-6xl text-white mb-4">
          <h1>Order a yummy Experience</h1>
          <h1 className="text-2xl">
            Find restaurants delivering right now, near you
          </h1>
        </div>
        <div class="w-1000 h-400">
          <form class="flex items-center">
            <input
              type="text"
              placeholder="Location"
              class="py-2 px-12 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <button
              type="submit"
              class="ml-2 py-2 px-4 bg-orange-600 text-white rounded-md hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
