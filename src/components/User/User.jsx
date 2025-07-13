import React from 'react';
import { useParams, Link } from 'react-router-dom';

function User() {
  const { userid } = useParams();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-xl p-8 text-center max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">User Page</h1>
        <p className="text-lg text-gray-600">User ID: <span className="font-semibold text-blue-600">{userid}</span></p>

        <Link to="/github">
          <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Back to GitHub
          </button>
        </Link>
      </div>
    </div>
  );
}

export default User;
