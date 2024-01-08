import React from 'react'
import "./Fashiontippy.css"
import Tippy from '@tippyjs/react'
import MenDrop from './DropdownMen/MenDrop'
import 'tippy.js/themes/light.css'

const Fashiontippy = () => {
  return (
    <div className='Fashiontippy'>
      <div>
        <Tippy content={<MenDrop />}
          className='Men-content'
         theme='light'
         interactive='true'
        >
          <div className='Men'>
          <span>Men</span>
          <i class="bi bi-caret-right-fill"></i>
          </div>
          
        </Tippy>
        
      </div>
      <div>
        <p>Women</p>
      </div><div>
        <p>Shoes</p>
      </div>
    </div>
  )
}

export default Fashiontippy
