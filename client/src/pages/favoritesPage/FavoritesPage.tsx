import React from 'react'
import { CardInterface } from '../../App'
import FavoriteCardInfo from '../../components/FavoriteCardInfo/FavoriteCardInfo'
import './FavoritesPage.css'

interface favsType {
  favs: CardInterface[],
  setFavs: React.Dispatch<React.SetStateAction<CardInterface[]>>,
}

export const FavoritesPage  = ({ favs, setFavs }: favsType) => {

  return (
    <>
      <h1 className='fav-header'>Favorites</h1>
      <section className='cards-overview-section'>
        <ul className="card-list" >
            {favs.map((photo: CardInterface) => (
                <FavoriteCardInfo key={`${photo.id}`} item={photo} setFavs={setFavs!}/>
            ))}
        </ul>
      </section>
    </>
  )
}
