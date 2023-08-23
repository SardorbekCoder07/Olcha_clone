import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { navbarTop } from '../../assets'
import { Container, List, Nav } from 'reactstrap'
const Navbar = () => {
  return (
    <div >
      <Link to='/'>
        <img className='w-100' src={navbarTop} alt='Reklama' />
        <div className='navbar-div'>
          <Container className='m-5 p-0'>
            <Nav className='top_menu'>
              <List className='w-100 ' type='unstyled'>
                <li className='float-start top-menu_list'>
                  <button className='nav-button'>
                    0% Muddatli to'lov
                  </button>
                  <button className='nav-button_2'>
                    Chegirmalar
                  </button>
                  <button className='nav-button'>
                    Yutuqli o'yinlar
                  </button>
                  <Link className='navbar-sayt-karta' to='/'>
                    Sayt xaritasi
                  </Link>
                </li>

                <li className='float-end'>
                  <a className='  navbar_raqam' href='/'>
                    +998 (71)202 2021
                  </a>
                  <button className='nav-button_2 nav-button_2-width ms-3'>
                    olchada soting
                  </button>
                </li>
              </List>
            </Nav>
          </Container>
        </div>
      </Link>
    </div>
  )
}

export default Navbar