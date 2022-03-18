import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import AboutPage from './pages/aboutPage/AboutPage';
import { FavoritesPage } from './pages/favoritesPage/FavoritesPage';
import GalleryPage from './pages/gallery/GalleryPage';
import HomePage from './pages/homepage/HomePage';

export interface CardInterface {
  descr: string,
  url: string,
  download: string,
  username: string,
  user_image: string,
  user_bio: string,
  clicked: boolean,
  id: string
}

const App: React.FC = () => {

  const state: CardInterface[] = []

  const favorites: CardInterface[] = []

  const [ urls, setUrls ] = useState(state);

  const [ favs, setFavs ] = useState(favorites)

  useEffect(() => {
    const localStorageData = localStorage.getItem('urls')
    if (localStorageData) {
      setUrls(JSON.parse(localStorageData))
    }
  }, [] )

  useEffect(() => {
    localStorage.setItem('urls', JSON.stringify(urls))
  })

  useEffect(() => {
    const localStorageData = localStorage.getItem('favs')
    if (localStorageData) {
      setFavs(JSON.parse(localStorageData))
    }
  }, [] )

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favs))
  })

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage setState={setUrls} />}/>
          <Route path='/gallery' element={<GalleryPage urls={urls} setUrls={setUrls} setFavs={setFavs}/>}/>
          <Route path='/favorites' element={<FavoritesPage favs={favs} setFavs={setFavs}/>}/>
          <Route path='/about' element={<AboutPage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
