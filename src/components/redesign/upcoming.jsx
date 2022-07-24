import React, { useState } from 'react';
import ModalComponent from '../atoms/modalComponent';
import { constants } from '../../data/data';

export const Upcoming = (props) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <ModalComponent
        show={modalShow}
        onHide={() => setModalShow(false)}
        heading={'MetaConx'}
        content={constants.KnowMore.metaconx}
      />
      <div className='upcoming-container'>
        <div className='container'>
          <div className='row art-container'>
            <div className='col-xs-12 col-md-4 artgallery-heading-wrapper'>
              <p className='artgallery-heading'>
                Upcoming
                <img
                  src='img/dash.svg'
                  className='artgallery-subheading'
                  alt='dash'
                />
              </p>
            </div>
          </div>
        </div>
        <div className='upcoming-wrapper'>
          <div className='container'>
            <div className='row upcoming-content-wrapper'>
              <div className='col-xs-12 col-md-5 upcoming-img-container'>
                <img
                  src='img/upcoming.png'
                  alt='meraconx'
                  className='upcoming-img'
                />
              </div>
              <div className='col-xs-12 col-md-7 upcoming-content-container'>
                <h5
                  style={{
                    color: 'white',
                    fontSize: '45px',
                    lineHeight: ' 67.5px',
                    fontWeight: 600,
                  }}
                >
                  BANGALORE, INDIA
                </h5>
                <p
                  style={{
                    color: 'white',
                    fontWeight: 400,
                    fontSize: '24px',
                    lineHeight: '36px',
                    marginBottom: '56px',
                  }}
                >
                  COMING SOON..
                </p>
                <p
                  style={{
                    color: 'white',
                    fontWeight: 400,
                    fontSize: '18px',
                    lineHeight: '27px',
                    marginBottom: '63px',
                  }}
                >
                  MetaconX is a first of its kind Crypto/NFT Art event organized
                  by COI for a global audience. The plans include a full array
                  of activities such as keynotes, panel discussions, onboarding,
                  awards, installations, and of course, lots of art of all
                  kinds!
                </p>
                <p>
                  <a
                    href={props.data ? props.data.discord : '/'}
                    className='btn btn-custom btn-lg know-more-anchor'
                    style={{
                      backgroundColor: 'transparent',
                      borderColor: '#4daeb4',
                      margin: 0,
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
            </div>
          </div>
        </div>
        <div className='submitnft-wrapper'>
          <div className='container'>
            <div className='row submitnft-content-wrapper'>
              <div className='col-xs-12 col-md-5 submitnft-img-container'>
                <img
                  src='img/sumbitnft.png'
                  alt='meraconx'
                  className='sumbitnft-img'
                />
              </div>
              <div className='col-xs-12 col-md-7 submitnft-content-container'>
                <h5
                  style={{
                    color: '#07113D',
                    fontSize: '45px',
                    lineHeight: ' 67.5px',
                    fontWeight: 600,
                  }}
                >
                  Submit your Artwork
                </h5>

                <p
                  style={{
                    color: '#07113D',
                    fontWeight: 400,
                    fontSize: '18px',
                    lineHeight: '27px',
                    marginBottom: '63px',
                  }}
                >
                  Join our community of creatives. Showcase and sell your
                  digital, physical, or phygital artworks. Digitally sign your
                  work by creating a tokenized certificate that lives on the
                  blockchain. This certificate will act as your proof of
                  authenticity for posterity. Not just that, selected artists
                  become part of the COI DAO (Decentralised Autonomous
                  Organisation) that will revolutionise the Asian art market.
                </p>
                {/* <p>
                  <a
                    href={props.data ? props.data.discord : "/"}
                    className='btn btn-custom btn-lg know-more-anchor'
                    style={{
                      backgroundColor: "transparent",
                      borderColor: "#07113D",
                      margin: 0,
                      color: "#07113D",
                    }}
                    target='blank'
                  >
                    Regsiter
                  </a>
                </p> */}
              </div>
            </div>
          </div>
        </div>

        <div className='community-wrapper'>
          <div className='container'>
            <div className='row community-content-wrapper'>
              <div className='col-xs-12 col-md-5 community-img-container'>
                <img
                  src='img/community.png'
                  alt='meraconx'
                  className='community-img'
                />
              </div>
              <div className='col-xs-12 col-md-7 community-content-container'>
                <h5
                  style={{
                    color: 'white',
                    fontSize: '45px',
                    lineHeight: ' 67.5px',
                    fontWeight: 400,
                    marginBottom: '40px',
                  }}
                >
                  Be part of our Community
                </h5>
                <p
                  style={{
                    color: 'white',
                    fontWeight: 400,
                    fontSize: '18px',
                    lineHeight: '27px',
                    marginBottom: '63px',
                  }}
                >
                  Come take part in the conversation. Make your voice heard and
                  your presence felt in our fast expanding community of
                  like-minded artists, collectors and supporters. Stay up to
                  date on everything COI. Collect tokens, get rewards and become
                  part of NFT history!
                </p>
                <p>
                  <a
                    href='https://discord.gg/D55Ux44QAg'
                    className='btn btn-custom btn-lg know-more-anchor'
                    style={{
                      backgroundColor: '#4DAEB4',
                      borderColor: '#4DAEB4',
                      margin: 0,
                      color: 'white',
                    }}
                    target='blank'
                  >
                    Join Discord
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
