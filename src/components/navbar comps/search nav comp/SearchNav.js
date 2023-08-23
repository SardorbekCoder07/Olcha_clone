import React, { useEffect } from 'react'
import './searchNav.css'
import { Link } from 'react-router-dom'
import { logotip, search, statistic } from '../../assets'



const SearchNav = () => {
  useEffect(() => {
    const navIcons = document.querySelectorAll('#nav-icon3');
    const navIcons2 = document.querySelectorAll('#btn-click');
      navIcons2[0].addEventListener('click', () => {
        navIcons[0].classList.toggle('open');
    });
  }, [])
  return (
    <div className='search_bottom'>
      <div className='bottom_search'>
        <Link to='/'>
          <img src={logotip} alt='logo' />
        </Link>
        <button className='burger ' id='btn-click'>
          <div id="nav-icon3" className='float-start '>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span className='float-end spans mt- mx-3'> Katalog</span>
        </button>
        <div className='bottom-search_header'>
          <div className='search-wrapper'></div>
          <div className='form-search'>
            <input type="text" className='form-search_input' placeholder="Katalog bo'yicha qidirish" />
            <img className='search_image' src={search} alt=" input search" />
          </div>
        </div>
        <div className='search-header_actions'>
          <img src={statistic} alt="rasm" />
        </div>
      </div>
    </div>
  )
}

export default SearchNav