import React from 'react'
import Cards from '../../components/cards/Cards'
import Form from '../../components/form/Form';
import './GalleryPage.css'
import { CardInterface } from '../../App';

export interface setStateProp {
  setState: React.Dispatch<React.SetStateAction<CardInterface[]>>
}

interface GalleryInterface {
  urls: CardInterface[];
  setUrls: React.Dispatch<React.SetStateAction<CardInterface[]>>,
  setFavs: React.Dispatch<React.SetStateAction<CardInterface[]>>
}

const GalleryPage: React.FC<GalleryInterface> = ( {urls, setUrls, setFavs}) => {

  return (
    <section className='gallery-page'>
      <h1 className='gallery-page__header'>Gallery</h1>
      <Form setState={setUrls}/>
      <Cards urls={urls} setUrls={setUrls} setFavs={setFavs}/>
    </ section>
  )
}

export default GalleryPage