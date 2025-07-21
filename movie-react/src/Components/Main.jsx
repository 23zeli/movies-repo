import React from "react";


function Main() {
  const [movies, setMovies] = React.useState([])
  const [searchTerm, setSearchTerm] = React.useState('')
  
  const apiKey = import.meta.env.VITE_API_KEY;

  const fetchMovies = (searchTerm) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}&include_adult=false&language=en-US&page=1`)
      .then(res => res.json())
      .then(json => setMovies(json.results))
  }

  React.useEffect(() => {
    fetchMovies(searchTerm)
  }, [searchTerm]);

  const handleSearch = (e) => {
       e.preventDefault();
       setSearchTerm(e.target.value);
   };

   const handleSubmit = (e) => {
       e.preventDefault();
       fetchMovies();
   };

  return(
    <div>
      <form 
          onSubmit={handleSubmit}
      >
        <div 
          className="search-container"
          style={{
            margin: "auto",
            width: "600px",
            // width: "max-content",
            display: "flex", 
            alignItems: "centre",
            padding: "14px",
            borderRadius: "28px",
          }}
        >
          <span className="material-symbols-outlined icon" type= "submit">search</span>
          <input 
            className="input"
            type='text' 
            placeholder='type to search movies...' 
            onChange={handleSearch} 
            value={searchTerm} 
          />
          {/* <button 
            type='submit'
            className="btn"
            style={{
              height: "35px", 
              borderRadius: "20px", 
              padding: "0 5px 0 5px",
              width: "80px",
            }}
          >
            Search
          </button> */}
        </div>
      </form>
      <div className= "movie-list">
        {
          movies.map((movie, index) => (
            <div key={index} className= "movie">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie-poster"/>
              <h3 className="movie_tittle">{movie.original_title}</h3>
            </div>
          ))
        }
      </div>
    </div>
   );
}

export default Main;