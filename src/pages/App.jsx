import React from 'react'
import Card from '../components/card'

export default function App() {
  return (
    <div className='App'>
      < Card 
        imgSrc={"https://picsum.photos/200"} 
        imgAlt={"Card image"} 
        title={"Title card"}
        description={"this is the card description, she can be more longer but the time is money"}
        buttonText={"Learn more"}
        link="cardPage"
      />
    </div>
  )
}
