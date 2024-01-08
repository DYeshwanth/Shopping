import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Header-first.css"
import Tippy from '@tippyjs/react';
import Fashiontippy from '../LoginTool/Fashiontippy';
import 'tippy.js/themes/light.css'

const HeaderFist = () => {
  return (
    <div className='Header-f1'>
        <Tippy content={<Fashiontippy />}
                theme='light'
                interactive='true'
              >
            <div className='Header-fii'>
              <p>
              <img src='https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100' />
              </p>
              <span>Fashion</span>
              <i class="bi bi-chevron-down"></i>
              
            </div>
        </Tippy>
    </div>
  )
}

export default HeaderFist
