import React from 'react'
import { CardInterface } from '../../App';


interface FavoriteButtonProps {
  item: CardInterface;
  setFavs: React.Dispatch<React.SetStateAction<CardInterface[]>>
}

const FavoriteButton = ({ setFavs, item }: FavoriteButtonProps) => {

    const addToFavorites = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        setFavs((prevFavs) => {
						item.clicked = false;
            return [...prevFavs, item]
    })
}
  return (
    <button hidden={!item.clicked} className="item-clicked__favorite-button" id={item.id} 
		onClick={(event) => addToFavorites(event)}>Add to favorites</button>
  )
}

export default FavoriteButton