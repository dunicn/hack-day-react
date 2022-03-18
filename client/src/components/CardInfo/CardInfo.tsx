import React from 'react'
import { CardInterface } from '../../App';
import FavoriteButton from '../FavoriteButton/FavoriteButton';


interface GalleryInterface {
  item: CardInterface;
  setUrls: React.Dispatch<React.SetStateAction<CardInterface[]>>,
  setFavs: React.Dispatch<React.SetStateAction<CardInterface[]>>,
	clickedClass: string
}

const CardInfo = ( {item, setUrls, setFavs, clickedClass}: GalleryInterface) => {

  return (
    <section className={`pic-info${clickedClass}`}>
        		<img className={`item__image${clickedClass}`} src={item.url} alt={item.username}/>
						<p className='pic-info__descr' hidden={!item.clicked}>{item.descr}</p>
				<span hidden={!item.clicked} className='item-clicked__buttons'>
					<a hidden={!item.clicked} className='pic-info__link' href={item.download}>Open in full size</a>
					<FavoriteButton item={item} setFavs={setFavs}/>
				</span>
		</section>
  )
}

export default CardInfo