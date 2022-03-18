import React from 'react'
import Card from '../card/Card'
import './Cards.css'
import { CardInterface } from '../../App'

export interface setStateProp {
  setState: React.Dispatch<React.SetStateAction<any[]>>
}

interface GalleryInterface {
  urls: CardInterface[];
  setUrls?: React.Dispatch<React.SetStateAction<CardInterface[]>>,
  setFavs?: React.Dispatch<React.SetStateAction<CardInterface[]>>

}

const Cards: React.FC<GalleryInterface> = ( { urls, setUrls, setFavs }) => {


  return (
    <section className='cards-overview-section'>
        <ul className="card-list" >
            {urls.map((photo: CardInterface) => (
								<Card key={`${photo.id}`} item={photo} setUrls={setUrls!} setFavs={setFavs!}/>
            ))}
        </ul>
    </section>
  )
}

export default Cards