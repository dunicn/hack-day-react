import React from 'react'
import './Card.css'
import { CardInterface } from '../../App';
import UserInfo from '../userInfo/UserInfo';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import CardInfo from '../CardInfo/CardInfo';

export interface setStateProp {
  setState: React.Dispatch<React.SetStateAction<any[]>>
}

interface GalleryInterface {
  item: CardInterface;
  setUrls: React.Dispatch<React.SetStateAction<CardInterface[]>>,
  setFavs: React.Dispatch<React.SetStateAction<CardInterface[]>>
}

const Card: React.FC<GalleryInterface> = ( {item, setUrls, setFavs }) => {

	const toggleClicked = (itemId: string, event: React.MouseEvent<HTMLElement>) => {
		event.stopPropagation();
		setUrls((prevState: CardInterface[]) => {

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

  return (
    <li className={`item${clickedClass}`} key={item.id} onClick={(event) => toggleClicked(item.id, event)}>
			<UserInfo item={item}/>
			<CardInfo item={item} setFavs={setFavs} setUrls={setUrls} clickedClass={clickedClass}/>
    </li>
  )
}

export default Card