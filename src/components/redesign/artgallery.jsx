import { Cards } from '../atoms/cards';
import { constants } from '../../data/data';
import { useState, useEffect } from 'react';

export const Artgallery = (props) => {
  const [viewMoreCount, setViewMoreCount] = useState(1);
  const [artData, setArtData] = useState(
    constants.ArtGallery.slice(0, 3 * viewMoreCount)
  );

  useEffect(() => {
    setArtData(constants.ArtGallery.slice(0, 3 * viewMoreCount));
  }, [viewMoreCount]);

  const viewMore = (event) => {
    event.preventDefault();
    setViewMoreCount(viewMoreCount + 1);
  };

  return (
    <div className='artgallery-container' id='artgallery'>
      <div className='container'>
        <div className='row art-container'>
          <div className='col-xs-12 col-md-4 artgallery-heading-wrapper'>
            <p className='artgallery-heading'>
              Art Gallery
              <img
                src='img/dash.svg'
                className='artgallery-subheading'
                alt='dash'
              />
            </p>
          </div>
        </div>
        <div className='row art-wrapper'>
          <div className='col-xs-12 col-md-4 art-card-container'>
            <Cards value={artData} />
            <p
              style={{ textAlign: 'center' }}
              className={
                constants.ArtGallery.length > viewMoreCount * 3
                  ? null
                  : 'd-none'
              }
            >
              <a
                href={props.data ? props.data.discord : '/'}
                className='btn btn-custom btn-lg submit-work'
                style={{
                  backgroundColor: 'white',
                  borderColor: 'black',
                }}
                onClick={viewMore}
                target='blank'
              >
                View More
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
