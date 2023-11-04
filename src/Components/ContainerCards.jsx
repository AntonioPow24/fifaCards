

import { useEffect, useState } from 'react'
import '../Style/containercards.css'
import Card from './Card'
// import { data } from '../routers/data'

export default function ContainerCards() {

  const [data,setData]=useState(null)

  useEffect(()=>{
      fetch('https://player-api-render.onrender.com/api/v1/players')
      .then((response) => response.json())
      .then((data) => setData(data))
  },[])


  return (
    <div className="container">
      
        {data?.map(player => (
          <Card
          key={player.id}
          name={player.namePlayer}
          age={player.age}
          team={player.team}
          img={player.urlImage}
          pos={player.position}
          />
        ))}

        
    </div>
  )
}