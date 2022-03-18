import React from 'react'
import { CardInterface } from '../../App'

interface userInfoType {
    item: CardInterface
  }

const UserInfo = ({ item }: userInfoType) => {
  return (
    <section className='item-clicked__user-info'>
        <section className='item-clicked__user-info_bio'>
            <h4 hidden={!item.clicked}>By: {item.username}</h4>
            <p hidden={!item.clicked} >{item.user_bio}</p>
        </section>
        <img hidden={!item.clicked} src={item.user_image} alt='User' className='item-clicked__user-info__profile-pic'/>
    </section>
  )
}

export default UserInfo