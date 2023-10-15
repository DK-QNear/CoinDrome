import React from 'react'
import styled from 'styled-components'
import {FaCoins} from 'react-icons/fa'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <Link to='/'>
    <div>
    <Nav>
        <FaCoins className='icon' fontSize={'2rem'} color='#6900ff'/>
        <h1>Coin<Search className='pupple'>Drome</Search> </h1>
    </Nav>
    </div>
    </Link>
  )
}
const Nav=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`
const Search=styled.span`
    color:#6900ff;
`
export default Navbar
