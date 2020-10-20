import React from 'react';
import { GlobalStyle } from './styled';
import Navigation from '../components/Navigation';
import bgImage from '../assets/background.png';

const navItems = [
  { label: 'Kanaler', iconType: 'channels', url: '#kanaler' },
  { label: 'Film', iconType: 'movies', url: '#film'  },
  { label: 'Serier', iconType: 'series', url: '#serier'  },
  { label: 'Børn', iconType: 'parental', url: '#boern'  },
  { label: 'Min Samling', iconType: 'favorites', url: '#min-samling'  }
];

const App = () => {
  return (
    <div className="App">
      <GlobalStyle bgImage={bgImage} />
      <Navigation items={navItems} title={`Hjem`} />
    </div>
  );
};

export default App;
