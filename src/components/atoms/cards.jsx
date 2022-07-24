import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';
import ReactPlayer from 'react-player';
import React from 'react';

export const Cards = (props) => {
  const data = props.value;
  console.log('Data - ', data);
  return (
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      {data.map((unit) => {
        return (
          <MDBCol>
            <MDBCard className='h-100'>
              {unit.imagePath.slice(-3) === 'mp4' ? (
                <ReactPlayer
                  url={unit.imagePath}
                  playing={false}
                  loop={false}
                  controls={true}
                  width={'unset'}
                />
              ) : (
                <MDBCardImage
                  src={unit.imagePath}
                  alt={unit.alt}
                  position='top'
                />
              )}
              <MDBCardBody>
                <MDBCardTitle>
                  <p style={{ maxWidth: 'min-content' }}>
                    <span>{unit.heading}</span>
                  </p>
                  <p>
                    {unit.instagram ? (
                      <a
                        href={unit.instagram}
                        target='blank'
                        style={{ width: '60px' }}
                      >
                        <img
                          src='img/Instagram.png'
                          alt='instagram'
                          style={{ width: '60px' }}
                        />
                      </a>
                    ) : null}
                    {unit.twitter ? (
                      <a
                        href={unit.twitter}
                        target='blank'
                        style={{ width: '60px' }}
                      >
                        <img
                          src='img/Twitter.png'
                          alt='Twitter'
                          style={{ width: '60px' }}
                        />
                      </a>
                    ) : null}
                  </p>
                </MDBCardTitle>
                <MDBCardText>
                  <span style={{ marginRight: '20px' }}>
                    <img src={unit.profilePic} alt='profile pic' />
                  </span>
                  <span style={{ color: '#07113D' }}>{unit.name}</span>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        );
      })}
    </MDBRow>
  );
};
