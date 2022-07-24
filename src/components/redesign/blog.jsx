import { Blogcard } from '../atoms/blogcard';
import { constants } from '../../data/data';
import { useState, useEffect } from 'react';

export const Blog = (props) => {
  const [viewMoreCount, setViewMoreCount] = useState(1);
  const [blogData, setBlogData] = useState(
    constants.Blog.slice(0, 3 * viewMoreCount)
  );

  useEffect(() => {
    setBlogData(constants.Blog.slice(0, 3 * viewMoreCount));
  }, [viewMoreCount]);

  const viewMore = (event) => {
    event.preventDefault();
    console.log('View MOre');
    setViewMoreCount(viewMoreCount + 1);
  };

  return (
    <div className='blog-container'>
      <div className='container'>
        <div className='row blogcard-container'>
          <div className='col-xs-12 col-md-4 blogcard-heading-wrapper'>
            <p className='blogcard-heading'>
              Blog
              <img
                src='img/dash.svg'
                className='blogcard-subheading'
                alt='dash'
              />
            </p>
          </div>
        </div>
        <div className='row blog-wrapper'>
          <div className='col-xs-12 col-md-4 blog-card-container'>
            <Blogcard value={blogData} />
            <p
              style={{ textAlign: 'center' }}
              className={
                constants.Blog.length > viewMoreCount * 3 ? null : 'd-none'
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
