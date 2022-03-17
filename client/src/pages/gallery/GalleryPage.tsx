import React from 'react'
import Cards from '../../components/cards/Cards'
import Form from '../../components/form/Form';
import './GalleryPage.css'

export interface setStateProp {
  setState: React.Dispatch<React.SetStateAction<any[]>>
}

interface GalleryInterface {
  urls: any[];
  setUrls: React.Dispatch<React.SetStateAction<any[]>>,
  setFavs: React.Dispatch<React.SetStateAction<any[]>>
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