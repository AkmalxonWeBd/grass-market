import React from 'react'
import Main_black_menu from './main_black_menu'
import Main_carusel from './carusels/main_carusel/main_carusel'
import "./style.css"

function Main_page() {
  return (
    <div className='Main_control'>
      <div>
        <Main_black_menu />
      </div>
      <div>
        <Main_carusel />
      </div>
    </div>
  )
}

export default Main_page