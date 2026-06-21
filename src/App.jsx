import React, { useState } from 'react';
import "./App.css"


const App = () => {


  const [moviname, setMoviname] = useState("")
  const [movitails, setMovitails] = useState([])


  const API_KEYS = "d838f18c";

  const getMovies = async () => {
    const res = await fetch(`https://www.omdbapi.com/?s=${moviname}&apikey=${API_KEYS}`)
    const data = await res.json();
    console.log(data)
    setMovitails(data.Search || [])
  }




  return (


   <div className="p-3 pt-4 min-h-screen w-full text-center text-white overflow-x-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">

      <nav className="flex flex-wrap items-center justify-between gap-4 bg-gray-600 text-white p-3 rounded-xl shadow-lg ">
        <h1 className="text-2xl font-bold tracking-wider text-blue-500">
          🎬 AdMovies
        </h1>
        <input
          type="text"
          placeholder="Search movies..."
          className="flex-1 min-w-[200px] px-4 py-2 w-full md;flex -1 text-black bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={moviname}
          onChange={(e) => { setMoviname(e.target.value) }}
        />
        <button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg"
          onClick={(e) => { getMovies() }}> Search </button>
      </nav>




      <div>



        <div className='flex flex-col md:flex-row gap-4 item-center justify-center justify-around p-2 mt-2'>
          <h1 className="text-white text-2xl font-bold tracking-wide">CATAGORYS :</h1>
          <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-xl px-4 py-2 w-32 transition-all duration-300 hover:from-indigo-600 hover:to-blue-700 hover:scale-105 hover:shadow-xl">HOLLYWOOD</button>
          <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-xl px-4 py-2 w-32 transition-all duration-300 hover:from-indigo-600 hover:to-blue-700 hover:scale-105 hover:shadow-xl">BOLLYWOOD</button>
          <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-xl px-4 py-2 w-32 transition-all duration-300 hover:from-indigo-600 hover:to-blue-700 hover:scale-105 hover:shadow-xl">TOLLYWOOD</button>
        </div>



        <h3 className="text-white  mt-3 text-2xl font-bold tracking-wide">Results</h3>


        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {movitails.map((movie) => (
            <div
              key={movie.imdbID}
              className="bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-full h-60 object-cover"
              />

              <div className="p-4">
                <h2 className="text-lg font-bold text-white line-clamp-1">
                  {movie.Title}
                </h2>

                <div className="flex justify-between mt-3 text-gray-300 text-sm">
                  <span>📅 {movie.Year}</span>
                  <span className="bg-blue-600 px-2 py-1 rounded-full text-xs">
                    {movie.Type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>


  )

}
export default App