import React from 'react'
import { CardInterface } from '../../App';
import RemoveFavoriteButton from '../RemoveFavoriteButton/RemoveFavoriteButton'
import './FavoriteCardInfo.css'


interface FavCardProps {
  item: CardInterface;
  setFavs: React.Dispatch<React.SetStateAction<CardInterface[]>>
}

const FavoriteCardInfo = ( {item, setFavs}: FavCardProps) => {

	const toggleClicked = (itemId: string, event: React.MouseEvent<HTMLElement>) => {
		event.stopPropagation();
		setFavs((prevState: CardInterface[]) => {
		const itemToToggle = prevState.find((item: any) => item.id === itemId);
      	const todoToToggleIndex = prevState.findIndex((item: any) => item.id === itemId);

		const newState = [...prevState];
		const newItem = {...itemToToggle}
		
		
		newItem.clicked = !itemToToggle!.clicked
		newState.splice(todoToToggleIndex, 1, newItem as CardInterface)

		return [...newState]
		})


	}

	const clickedClass = item.clicked ? '-clicked' : '';

	const removeFromFavorites = (favID: string, event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setFavs((prevFavs) => prevFavs.filter((fav: CardInterface) => fav.id !== favID))
}


  return (
    <section className={`favorite-info${clickedClass}`} onClick={(event) => toggleClicked(item.id, event)}> 
				<img className={`favorite-item__image${clickedClass}`} src={item.url} alt={item.username}/>
				<p className='favorite-info__descr' hidden={!item.clicked}>{item.descr}</p>
				<span hidden={!item.clicked} className='favorite-item-clicked__buttons'>
					<a hidden={!item.clicked} className='favorite-info__link' href={item.download}>Open in full size</a>
					<button hidden={!item.clicked} 
						className="favorite-item-clicked__remove-button" 
						id={item.id} 
						onClick={(event) => removeFromFavorites(item.id, event)}>
						Remove
					</button>
				</span>
		</section>
  )
}

export default FavoriteCardInfo