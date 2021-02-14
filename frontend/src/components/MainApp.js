import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState, useEffect} from "react";
import MovieList from "./MovieList";
import MovieListheading from "./MovieListheading";
import addToFavoritList from "./AddFavoriteList";
import RemoveFavorites from "./RemoveFavorite";
import SearchBox from "./SearchBox";
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom'
import {LoadUser} from '../actions/auth'


function MainApp(props) {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [favorites, setFavorite] = useState([]);

    console.log("Moviesssss", movies)
    const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=c41735`
        const response = await fetch(url);
        const responseJson = await response.json();
        if (responseJson.Search) {
            setMovies(responseJson.Search)
        }
    };
    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue]);

    useEffect(() => {
        const movieFavourites = JSON.parse(
            localStorage.getItem('react-movie-app-favourites')
        );

        if (movieFavourites) {
            setFavorite(movieFavourites);
        }
    }, []);

    const saveToLocalStorage = (items) => {
        localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
    };

    const addFavoritMovie = (movie) => {
        const newfavoritList = [...favorites, movie]
        setFavorite(newfavoritList);
        saveToLocalStorage(newfavoritList);
    };
    const removeFavouriteMovie = (movie) => {
        console.log("remove favorite working")
        const newFavoriteList = favorites.filter(
            (favourite) => favourite.imdbID !== movie.imdbID
        );
        console.log("New favorite list after remove",newFavoriteList)
        setFavorite(newFavoriteList);
        saveToLocalStorage(newFavoriteList);
    };
    if (!props.isAuthenticate) {
        return (<Redirect to='/login'/>);
    }

    return (
        <div className="container-fluid  movie-app">
            <div className="align-items-center mt-4" style={{textAlign:'center'}}>
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
            </div>
            <div className='row d-flex align-items-center mt-4 mb-4' style={{textAlign:'center'}}>
                <MovieListheading heading="Movies"/>
            </div>
            <div className="row">
                <MovieList movies={movies} handlefavoritClick={addFavoritMovie} favoriteCom={addToFavoritList}/>
            </div>
            <div className='row d-flex align-items-center mt-4 mb-4' style={{textAlign:'center'}}>
                <MovieListheading heading="Favorites"/>
            </div>
            <div className='row d-flex align-items-center mt-4 mb-4'>
                <div className="row">
                    <MovieList movies={favorites} handlefavoritClick={removeFavouriteMovie}
                               favoriteCom={RemoveFavorites}/>
                </div>
            </div>

        </div>

    )
}

const mapStateToProps = (state) => ({
    isAuthenticate: state.auth.isAuthenticate
    // state.auth.isAuthenticate
});
export default connect(mapStateToProps)(MainApp);
