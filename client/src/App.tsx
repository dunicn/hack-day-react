import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cards from './components/cards/Cards';
import Form from './components/form/Form';
import Navbar from './components/navbar/Navbar';
import AboutPage from './pages/AboutPage';
import { FavoritesPage } from './pages/FavoritesPage';
import GalleryPage from './pages/gallery/GalleryPage';
import HomePage from './pages/homepage/HomePage';

const App: React.FC = () => {

  const state: any[] = [{"descr":"close up photo of tabby cat","url":"https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTA4MTN8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHx8fHwxNjQ3NTAxMzI0&ixlib=rb-1.2.1&q=80&w=400","download":"https://unsplash.com/photos/cWOzOnSoh6Q/download?ixid=MnwzMTA4MTN8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHx8fHwxNjQ3NTAxMzI0","username":"Pacto Visual","user_image":"https://images.unsplash.com/profile-1473344555115-b9ddcfea9017?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128", "clicked": true}]

  const favorites: any[] = []

  const [ urls, setUrls ] = useState(state);

  const [ favs, setFavs ] = useState(favorites)


  console.log('state', favs)
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage setState={setUrls} />}/>
          <Route path='/gallery' element={<GalleryPage urls={urls} setUrls={setUrls} setFavs={setFavs}/>}/>
          <Route path='/favorites' element={<FavoritesPage favs={favs}/>}/>
          <Route path='/about' element={<AboutPage />}/>

        </Routes>
        {/* <Cards urls={urls}/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
