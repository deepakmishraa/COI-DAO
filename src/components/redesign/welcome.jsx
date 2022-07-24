import ReactPlayer from 'react-player';
import React, { useState } from 'react';
import ModalComponent from '../atoms/modalComponent';
import { constants } from '../../data/data';

export const Welcome = (props) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className='welcome-container' id='home'>
      <ModalComponent
        show={modalShow}
        onHide={() => setModalShow(false)}
        heading={'About COI'}
        content={constants.KnowMore.aboutCoi}
      />
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-4'>
            <p className='welcome-heading'>Welcome To Colours of India</p>
            <p className='welcome-subheading'>
              We are on a mission to bring Indian NFT art to the world! As the
              first DAO of its kind in the subcontinent, we aim to develop a
              vibrant culture of diversity, openness and freedom of expression.
              Join the movement.
            </p>
            <p>
              <a
                href={props.data ? props.data.discord : '/'}
                className='btn btn-custom btn-lg know-more-anchor'
                style={{
                  backgroundColor: '#4daeb4',
                  borderColor: '#4daeb4',
                }}
                target='blank'
                onClick={(event) => {
                  event.preventDefault();
                  setModalShow(true);
                }}
              >
                Know More
              </a>
            </p>
          </div>
          <div className='col-xs-12 col-md-8'>
            <ReactPlayer url='https://vimeo.com/645183430' width='100%' />
          </div>
        </div>
      </div>
    </div>
  );
};
