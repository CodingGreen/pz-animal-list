import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const InfoModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow}>
        How was this made?
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>How was this made?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            I created this project to practice my front end coding skills. It uses
            {' '}
            <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">Gatsby</a>
            {' '}
            a great framework for making static websites and in addition
            {' '}
            <a href="https://github.com/tannerlinsley/react-table" target="_blank" rel="noopener noreferrer">React Table</a>
            {' '}
            to handle all the table logic and
            {' '}
            <a href="https://react-bootstrap.github.io/" target="_blank" rel="noopener noreferrer">React Bootstrap</a>
            {' '}
            for this basic UI as I&apos;m no artistic designer.
          </p>
          <p>
            The source is
            {' '}
            <a href="https://github.com/CodingGreen/pz-animal-list" target="_blank" rel="noopener noreferrer">available on Github</a>
            {' '}
            for anyone to contribute to. Found an issue or want to give me some pro-tips?
            {' '}
            <a href="https://github.com/CodingGreen/pz-animal-list/issues/new" target="_blank" rel="noopener noreferrer">Leave an issue</a>
            {' '}
            on the repository.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default InfoModal;
