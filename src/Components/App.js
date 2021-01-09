import React from 'react'
import '../App.css';
import axios from 'axios';

import SearchForm from './SearchForm';
import GifList from './GifList';
import Nav from './Nav.js';

function App() {

  return (
    <>
			<Nav />
      <section className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm />
        </div>
      </section>
      <section className="main-content">
				<GifList />

      </section>
    </>
  );
}

export default App

