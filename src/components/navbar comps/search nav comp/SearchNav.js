import React, { useEffect } from 'react'
import './searchNav.css'
import { Link } from 'react-router-dom'
import { heart, logotip, person, search, shop, statistic } from '../../assets'
import { Button, Input, InputGroup } from 'reactstrap'



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
          <img src={logotip} alt='logo' className='images' />
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
          <div className='navbar-search'>
            <InputGroup>
              <Input type="text" className='navbar-search_input' placeholder="Katalog bo'yicha qidirish"  />
              <Button color='light' className='p-0 ' >
                <img className='search_image' src={search} alt=" input search" />
              </Button>
            </InputGroup>
           
            
          </div>
        </div>
        <figure className="figure">
          <img src={statistic} alt="rasm" className='figure-img img-fluid  ' />
          <figcaption className="text-center figure-caption">Taqqoslash</figcaption>
        </figure>
        <figure className="figure">
          <img src={heart} alt="rasm" className='figure-img img-fluid align-items-center  ms-3' />
          <figcaption className="text-center figure-caption">Taqqoslash</figcaption>
        </figure>
        <figure className="figure">
          <img src={shop} alt="rasm" className='figure-img img-fluid ' />
          <figcaption className="text-center figure-caption">Taqqoslash</figcaption>
        </figure>
        <figure className="figure">
          <img src={person} alt="rasm" className='figure-img img-fluid  ' />
          <figcaption className="text-center figure-caption">Taqqoslash</figcaption>
        </figure>

      </div>
    </div>
  )
}

export default SearchNav