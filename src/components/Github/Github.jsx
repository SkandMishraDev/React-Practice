import React, { useEffect, useState } from 'react';

function Github() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('https://api.github.com/users/skandmishradev')
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center">
        <img
          src={data.avatar_url}
          alt="avatar"
          className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500"
        />
        <h1 className="text-2xl font-bold mt-4 text-gray-800">{data.name}</h1>
        <p className="text-gray-600">@{data.login}</p>

        <div className="mt-4 flex justify-around text-sm text-gray-700">
          <div>
            <span className="block font-bold text-lg">{data.followers}</span>
            <span>Followers</span>
          </div>
          <div>
            <span className="block font-bold text-lg">{data.following}</span>
            <span>Following</span>
          </div>
          <div>
            <span className="block font-bold text-lg">{data.public_repos}</span>
            <span>Repos</span>
          </div>
        </div>

        <a
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          View GitHub Profile
        </a>
      </div>
    </div>
  );
}

export default Github;
