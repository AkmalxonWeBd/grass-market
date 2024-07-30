import React from 'react'
import Main_black_menu from './main_black_menu'
import Main_carusel from './carusels/main_carusel/main_carusel'
import "./style.css"
import ItemCarusel1 from './carusels/carusel1/carusel'
import ItemCarusel2 from './carusels/carusel2/carusel'
import ItemCarousel3 from './carusels/carusel3/carusel'

function Main_page() {
  return (
    <div className='Main_control'>
      <div>
        <Main_black_menu />
      </div>
      <div>
        <Main_carusel />
      </div>
      <div>
        <ItemCarusel1 />
      </div>
      <div>
        <ItemCarusel2 />
      </div>
      <div>
        <ItemCarousel3 />
      </div>
    </div>
  )
}

export default Main_page