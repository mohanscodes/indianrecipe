import react, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import headlogos from '../../assets/HeadLogos.png';

import { GlobalContext } from '../../Context/GlobalState';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  const { SetPageName } = useContext(GlobalContext);

  const home_Fn = () => {
    SetPageName("home")
    handleShowNavbar()
  }
  const dessertslist_Fn = () => {
    SetPageName("dessertslist")
    handleShowNavbar()
  }
  const nonVegFoodlist_Fn = () => {
    SetPageName("nonvegtarians")
    handleShowNavbar()
  }
  const drinkslist_Fn = () => {
    SetPageName("drinkslist")
    handleShowNavbar()
  }
  const snacklist_Fn = () => {
    SetPageName("snacklist")
    handleShowNavbar()
  }
  const souplist_Fn = () => {
    SetPageName("souplist")
    handleShowNavbar()
  }
  const veg_Fn = () => {
    SetPageName("veglist")
    handleShowNavbar()
  }
  const salad_Fn = () => {
    SetPageName("saladlist")
    handleShowNavbar()
  }

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img className='logoICon' alt='img' src={headlogos} />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <MenuIcon />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <Link to="/" onClick={home_Fn} >Home</Link>
            </li>
            <li>
              <Link to="/" onClick={dessertslist_Fn} >dessert</Link>
            </li>
            <li>
              <Link to="/" onClick={nonVegFoodlist_Fn} >Non Veg</Link>
            </li>
            <li>
              <Link to="/" onClick={drinkslist_Fn} >Drink</Link>
            </li>
            <li>
              <Link to="/" onClick={snacklist_Fn} >Snack</Link>
            </li>
            <li>
              <Link to="/" onClick={souplist_Fn} >Soup</Link>
            </li>
            <li>
              <Link to="/" onClick={veg_Fn} >Veg</Link>
            </li>
            <li>
              <Link to="/" onClick={salad_Fn} >salad</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar