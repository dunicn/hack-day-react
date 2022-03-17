import React from 'react'
import './Card.css'

export interface setStateProp {
  setState: React.Dispatch<React.SetStateAction<any[]>>
}

interface GalleryInterface {
  item: any;
  setUrls: React.Dispatch<React.SetStateAction<any[]>>,
  setFavs: React.Dispatch<React.SetStateAction<any[]>>
}

const Card: React.FC<GalleryInterface> = ( {item, setUrls, setFavs }) => {

	const toggleClicked = (itemId: string, event: any) => {
		event.stopPropagation();
		setUrls((prevState: any) => {

		const itemToToggle = prevState.find((item: any) => item.id === itemId);
      	const todoToToggleIndex = prevState.findIndex((item: any) => item.id === itemId);

		const newState = [...prevState];
		const newItem = {...itemToToggle}

		newItem.clicked = !itemToToggle.clicked
		newState.splice(todoToToggleIndex, 1, newItem)
		return [...newState]
		})


	}

	const addToFavorites = (itemId: string, event: any) => {
		event.stopPropagation();
		setFavs((prevFavs) => {
			return [...prevFavs, item]
		})
		// console.log('clicked', itemId)
	}

	const clickedClass = item.clicked ? '-clicked' : '';
  return (
    <li className={`item${clickedClass}`} key={item.id} onClick={(event) => toggleClicked(item.id, event)}>
        {/* <h1 className='item__header'>{item.username}:</h1> */}
				<section className='item-clicked__user-info'>
					<section className='item-clicked__user-info_bio'>
						<h4 hidden={!item.clicked}>By: {item.username}</h4>
						<p hidden={!item.clicked} >{item.user_bio}</p>
					</section>
					<img hidden={!item.clicked} src={item.user_image} alt='User' className='item-clicked__user-info__profile-pic'/>
					
			</section>
			<section className={`pic-info${clickedClass}`}>
        		<img className={`item__image${clickedClass}`} src={item.url} alt={item.username}/>
				<p className='pic-info__descr' hidden={!item.clicked}>{item.descr}</p>
				<span hidden={!item.clicked} className='item-clicked__buttons'>
					<a hidden={!item.clicked} className='pic-info__link' href={item.download}>Download</a>
					<button hidden={!item.clicked} className="item-clicked__favorite-button" id={item.id} 
						onClick={(event) => addToFavorites(item.id, event)}>Add to favorites</button>
				</span>
			</section>
    </li>
  )
}

export default Card