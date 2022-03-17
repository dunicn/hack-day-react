import React from 'react'
import Cards from '../components/cards/Cards'

export const FavoritesPage = ({favs}: any) => {

  
  const unclickedFavs = favs.map(( item: any) => {
    item.clicked = false
    return item
  })
  
  console.log('favs', unclickedFavs)
  return (
    <>
      <Cards urls={unclickedFavs} />

    </>
  )
}
