import React from 'react'
import ReactDOM from 'react-dom/client'
import ContainerCards from './Components/ContainerCards'
import './Style/main.css'
import Form from './Components/Form'


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="general">
    <Form/>
    <ContainerCards/>
  </div>


)
