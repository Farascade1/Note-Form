import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from "./Components/App"
import Products from "./Components/Products"
import Header from "./Components/Header"
import Notes from './Components/Notes'
import Form from "./Components/Form"

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>

 
    <Header />
    <Notes />

    {/* <Form /> */}

  </div>
)

