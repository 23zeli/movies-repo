import React from "react";

function Main() {
  const [movies, setMovies] = React.useState([])
  const [searchTerm, setSearchTerm] = React.useState('')

  // const fetchMovies = async () => {

  //   const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game_key=e4e8e9c303240c2eb67ed278f38deb5a';
  //   // const options = {
	//   //   method: 'GET',
	//   //   headers: {
	//   // 	  'x-rapidapi-key': 'f9fca1dd31mshbe73c23bcc8900cp125c7fjsn78fc13a074cf',
	//   // 	  'x-rapidapi-host': 'imdb8.p.rapidapi.com'
	//   //   }
  //   };

  //   try {
	//     const response = await fetch(url);
	//     const result = await response.text();
	//     console.log(result);
  //     setMovies(result);
  //   } catch (error) {
	//     console.error(error);
  //   }
  // }

  const fetchMovies = () => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e4e8e9c303240c2eb67ed278f38deb5a&query={searchTerm}`)
    .then(res => res.json())
    .then(json => setMovies(json.results))
  }

  React.useEffect(() => {
    fetchMovies()
  }, []);

  console.log(movies)

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
            placeholder='search movies...' 
            onChange={handleSearch} 
            value={searchTerm} 
          />
          <button 
            type='submit'
            className="btn"
            style={{
                height: "35px", 
            borderRadius: "20px", 
                // paddingLeft: "5px", 
                // paddingRight: "5px", 
                // paddingTop: "0", 
                // paddingBottom: "0", 
                padding: "0 5px 0 5px",
                width: "80px",
            }}
          >
            Search
          </button>
        </div>
      </form>
      <div className= "movie-list">
        {
          movies.map((movie, index) => (
            <div key={index} className= "movie">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
              <h3 className="movie_tittle">{movie.original_title}</h3>
            </div>
          ))
        }
      </div>
    </div>
   );
}

export default Main;