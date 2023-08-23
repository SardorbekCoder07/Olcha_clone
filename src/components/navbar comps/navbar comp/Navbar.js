import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { navbarTop } from '../../assets'
const Navbar = () => {
  return (
    <div >
      <Link to='/'>
        <img className='w-100' src={navbarTop} alt='Reklama' />
        <div className='navbar-div'>
          <button>
            0% Muddatli to'lov
          </button>
          <button>
            Chegirmalar
          </button>
          <button>
            Yutuqli o'yinlar
          </button>
          <Link to='/'>
            Sayt xaritasi
          </Link>
          <a href='/'>
            +998 (71)202 2021
          </a>
          <button>
            olchada soting
          </button>
        </div>
      </Link>
    </div>
  )
}

export default Navbar