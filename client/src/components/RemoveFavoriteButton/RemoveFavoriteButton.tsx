import React from 'react'
import { CardInterface } from '../../App';


interface RemoveFavoriteButtonProps {
  item: CardInterface;
  setFavs: React.Dispatch<React.SetStateAction<CardInterface[]>>
}

const RemoveFavoriteButton = ({ setFavs, item }: RemoveFavoriteButtonProps) => {

  const addToFavorites = (favID: string, event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setFavs((prevFavs) => prevFavs.filter((fav: CardInterface) => fav.id !== favID))
}
  return (
    <button hidden={!item.clicked} 
      className="item-clicked__favorite-button" 
      id={item.id} 
		  onClick={(event) => addToFavorites(item.id, event)}>
      Remove
    </button>
  )
}

export default RemoveFavoriteButton