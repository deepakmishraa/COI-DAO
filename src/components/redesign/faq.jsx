import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import { constants } from '../../data/data';
import { useState, useEffect } from 'react';

export const Faq = () => {
  const [viewMoreCount, setViewMoreCount] = useState(1);
  const [faqData, setFaqData] = useState(
    constants.Faq.slice(0, 3 * viewMoreCount)
  );

  useEffect(() => {
    setFaqData(constants.Faq.slice(0, 3 * viewMoreCount));
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
              FAQ's
              <img
                src='img/dash.svg'
                className='blogcard-subheading'
                alt='dash'
              />
            </p>
          </div>
        </div>
        <div className='row faq-wrapper'>
          <div className='col-xs-12 col-md-4 faq-card-container'>
            {faqData.map((faq, index) => (
              <MDBAccordion key={index}>
                <MDBAccordionItem
                  collapseId={faq.question}
                  headerTitle={faq.title}
                >
                  {faq.answer}
                </MDBAccordionItem>
              </MDBAccordion>
            ))}
          </div>
        </div>
        <p
          style={{ textAlign: 'center' }}
          className={constants.Faq.length > viewMoreCount * 3 ? null : 'd-none'}
        >
          <a
            href='home'
            className='btn btn-custom btn-lg submit-work'
            style={{
              backgroundColor: 'white',
              borderColor: 'black',
              marginTop: '1rem',
            }}
            target='blank'
            onClick={viewMore}
          >
            View More
          </a>
        </p>
      </div>
    </div>
  );
};
