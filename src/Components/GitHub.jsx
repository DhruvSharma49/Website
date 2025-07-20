import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {
  const data=useLoaderData()
  
  
  // const [data, setData] = useState(null);
  // // useEffect(() => {
  //   fetch("https://api.github.com/users/DhruvSharma49")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  if (!data) {
    return (
      <div className="flex justify-center items-center min-h-screen text-white text-xl">
        Loading Profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6 text-gray-800 transform hover:scale-[1.02] transition duration-300 ease-in-out">
        <div className="flex flex-col items-center">
          <img
            src={data.avatar_url}
            alt="GitHub Avatar"
            className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-md mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-900">{data.name}</h2>
          <p className="text-sm text-gray-500">@{data.login}</p>

          <p className="mt-3 text-center text-gray-700 text-sm italic px-4">
            {data.bio || "No bio provided"}
          </p>

          <div className="mt-4 grid grid-cols-3 gap-4 text-center w-full">
            <div>
              <p className="text-lg font-bold">{data.public_repos}</p>
              <p className="text-xs text-gray-500">Repos</p>
            </div>
            <div>
              <p className="text-lg font-bold">{data.followers}</p>
              <p className="text-xs text-gray-500">Followers</p>
            </div>
            <div>
              <p className="text-lg font-bold">{data.following}</p>
              <p className="text-xs text-gray-500">Following</p>
            </div>
          </div>

          <a
            href={data.html_url}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full shadow-md text-sm transition"
          >
            View GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default GitHub;

export const githubInfoLoader=async()=>{
  const response= await fetch("https://api.github.com/users/DhruvSharma49")
  return response.json()

}
