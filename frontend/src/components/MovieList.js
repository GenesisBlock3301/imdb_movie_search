import React, {useState} from 'react'
import ModalComp from "./Modal";


const MovieList = (props) => {
    const FavoriteComponent = props.favoriteCom;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div style={{display: "flex", justifyContent: 'center'}}>
            {
                props.movies.map((movie, index) => {
                    if (movie.Poster !== 'N/A') {
                        return (
                            <div className="image-container d-flex justify-content-start m-3"
                                 key={index}>
                                <img onClick={handleShow} src={movie.Poster} alt="movie"/>
                                <div onClick={() => props.handlefavoritClick(movie)}
                                     className="overlay d-flex align-items-center justify-content-center">
                                    <FavoriteComponent/>
                                </div>
                                <ModalComp movie={movie} show={show} onHide={handleClose} handleClose={handleClose}/>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
};
export default MovieList;