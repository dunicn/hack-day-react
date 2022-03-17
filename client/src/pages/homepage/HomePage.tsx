import React from 'react'
import Form from '../../components/form/Form'
import './HomePage.css'

interface formProps {
  setState: React.Dispatch<React.SetStateAction<any[]>>
}

const HomePage = ( { setState } : formProps) => {
  return (
    <section className='home-page'>  
      <h1 className='home-page__header'>Search for images</h1>
      <Form setState={setState}/>
    </ section>
  )
}

export default HomePage