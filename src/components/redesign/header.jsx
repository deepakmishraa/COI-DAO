import { Burgermenu } from './burgermenu';
import React, { useState } from 'react';

export const Header = (props) => {
  const [openMenu, setOpenMenu] = useState(false);

  const burgerIconClick = () => {
    if (openMenu) {
      setOpenMenu(false);
    } else {
      setOpenMenu(true);
    }
  };

  return (
    <div className='header-container'>
      <div className='container'>
        <div className='row' style={{ alignItems: 'center' }}>
          <div className='col-xs-2 logo-wrapper'>
            <a className='logo' href='#page-top'>
              <img src='img/h_logo.svg' alt='colours of india logo' />
            </a>
          </div>
          <div className='col-xs-6 navigation-wrapper'>
            <div className='header-search-bar-wrapper'>
              {/* <input
                type='text'
                className='search-input'
                placeholder='Search..'
              /> */}
            </div>
          </div>
          <div
            className='col-xs-4 submit-work-wrapper'
            style={{ display: 'flex' }}
          >
            {/* <a
              href={props.data ? props.data.discord : '/'}
              className='btn btn-custom btn-lg header-submit-work'
              style={{
                backgroundColor: '#4daeb4',
                borderColor: '#4daeb4',
              }}
              target='blank'
            >
              Register
            </a> */}
            <Burgermenu
              burgerIconClick={burgerIconClick}
              iconState={openMenu}
            />
          </div>
        </div>
        <div className='row' style={{ alignItems: 'center' }}>
          <div
            className={
              openMenu
                ? 'd-block col-xs-12 col-lg-8 navigation-wrapper-menu'
                : 'd-none'
            }
          >
            <div
              className={
                'd-block d-lg-flex col-xs-12 col-lg header-redirections'
              }
            >
              <a className='col-xs-12 col-lg' href='#home'>
                <span>Home</span>
              </a>
              <a className='col-xs-12 col-lg' href='#artgallery'>
                <span>Art gallery</span>
              </a>
              {/* <a className='col-xs-12 col-lg' href='home'>
                <span>About</span>
              </a>
              <a className='col-xs-12 col-lg' href='home'>
                <span>Blog</span>
              </a>
              <a className='col-xs-12 col-lg' href='home'>
                <span>Contact</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
