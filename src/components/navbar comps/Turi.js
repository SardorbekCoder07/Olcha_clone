import React, { useEffect } from 'react'
import './turi.css'

const Turi = () => {

  useEffect(() => {
    const navIcons = document.querySelectorAll('#nav-icon3');
    const navIcons2 = document.querySelectorAll('#btn-click');
      navIcons2[0].addEventListener('click', () => {
        navIcons[0].classList.toggle('open');
    });
  }, [])

  return (
      <button className='burger ' id='btn-click'>
        <div id="nav-icon3" className='float-start '>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span className='float-end spans mt- mx-3'> Kategoriya</span>
      </button>
  )
}

export default Turi