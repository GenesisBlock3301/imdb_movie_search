import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const ModalComp = (props) => {
    const handleClose = props.handleClose;
    // console.log("Modallllll",props.movie);
    const movie = props.movie;
    return (
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{movie.Title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Realese year: <small>{movie.Year}</small></p>
                <p>Content type: <small>{movie.Type}</small></p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default ModalComp;