import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import parse from 'html-react-parser';

function ModalComponent(props) {
  console.log('Props - ', props.show);

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      animation={false}
      style={customeStyle}
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          {props.heading}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{parse(props.content)}</p>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;

const customeStyle = {
  overlay: {
    // backgroundColor: 'rgb(61 61 61/70%);',
    // backgroundColor: 'rgba(253,255,255,0.44)',
  },
};
