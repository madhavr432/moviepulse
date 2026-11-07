import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

const Card = ({title})=>{
  const [count, setcount] = useState(0);
  const [hasLiked, setHasLiked]= useState(false);
  useEffect(()=>{
    console.log(`${title} has been liked: ${hasLiked}`);
  })
  return(
    <div className = "card" onClick={()=> setcount((prevState)=>prevState+1)}>
      <h2>
        {title} <br />{count}
      </h2>
      <button onClick = {() => setHasLiked(!hasLiked)}>
        {hasLiked? '❤️': '🤍'}
      </button>
    </div>
  )
}

const App = ()=>{
  

  return (
    <div className = "card-container">
      <Card title = "Star Wars" rating = {5} isCool = {true}/>
      <Card title = "Avatar"/>
      <Card title = "The Lion King"/>
    </div>
  )
}

export default App
