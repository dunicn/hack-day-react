import React from 'react'
import './Form.css'
import { v4 as uuidv4 } from 'uuid';

import { useNavigate } from 'react-router-dom' 


export interface setStateProp {
  setState: React.Dispatch<React.SetStateAction<any[]>>
}

const Form = ( { setState } : setStateProp) => {
  
  const navigate = useNavigate()
  
  const fetchData = async (event: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }) => {
    event.preventDefault()
    
    const searchData = new FormData(event.target);
    const keyword = Object.fromEntries(searchData).searchFieldInput;
    
    const data = await fetch(`http://localhost:8080/${keyword}`).then((res) => res.json());
    const dataWithID = data.map((item: any) => {
      item.clicked = false;
      item.id = uuidv4(); 
      // console.log(item)
      return item
    })
    setState(dataWithID)
    
    navigate({
      pathname: '/gallery'
    });
  }
  
  
  return (
    <form className="search-field" method="GET" action="/" onSubmit={fetchData}>
      <input className="search-field__input" type="text" name="searchFieldInput" required/> <br/>
      <input className="search-button" type="submit" value="Search"/>
    </form>
  )
}

export default Form