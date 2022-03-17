import React from 'react'
import Card from '../card/Card'
import './Cards.css'

export interface setStateProp {
  setState: React.Dispatch<React.SetStateAction<any[]>>
}

interface GalleryInterface {
  urls: any[];
  setUrls?: React.Dispatch<React.SetStateAction<any[]>>,
  setFavs?: React.Dispatch<React.SetStateAction<any[]>>

}

const Cards: React.FC<GalleryInterface> = ( { urls, setUrls, setFavs }) => {


  return (
    <section className='cards-overview-section'>
        <ul className="card-list" >
            {urls.map((photo: any) => (
								<Card key={`${photo.id}`} item={photo} setUrls={setUrls!} setFavs={setFavs!}/>
            ))}
        </ul>
    </section>
  )
}

export default Cards