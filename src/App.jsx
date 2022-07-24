import { Header } from './components/redesign/header';

import { Welcome } from './components/redesign/welcome';
import { Artgallery } from './components/redesign/artgallery';
import { Upcoming } from './components/redesign/upcoming';
import { Blog } from './components/redesign/blog';
import { Faq } from './components/redesign/faq';
import { Communitypartner } from './components/redesign/communitypartner';
import { Newsletter } from './components/redesign/newsletter';
import SmoothScroll from 'smooth-scroll';
import NftBuy from './components/redesign/NftBuy';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  return (
    <div className='main-container'>
      <Header />
      <Welcome />

      <Artgallery />
      <Upcoming />
      
      {/* <Blog /> */}
      <Faq />
      <NftBuy />
      <Communitypartner />
      <Newsletter />
    </div>
  );
};

export default App;
