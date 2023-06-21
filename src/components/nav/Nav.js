import { NavLink, Link } from "react-router-dom"
import s from "./Nav.module.css"
import { useState } from "react"
import logo from "../../assets/logo.svg"
import { CgMenuRight } from "react-icons/cg"
import { VscChromeClose } from "react-icons/vsc"
import { RiArrowDownSLine } from 'react-icons/ri'
 
// import cart icon as svg
import { ReactComponent as CartIcon } from '../../assets/cart.svg';

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false)
  const [showDrop, setShowDrop] = useState(false)

  const handleClick = () => {
      setShowMenu(!showMenu)
      console.log(showMenu)
  }

  return (
    <nav className={s.ctn}>
      <div className={s.wrp}>
        <Link to="/" className={s.logo}>
          <img src={logo} alt="logo"/>
        </Link>

        <div className={s.menu}  style={showMenu ? {right:  "0"} : {right:  '-100%'}}>
          <div className={s.links}>
            <NavLink to="/" onClick={() => setShowMenu(false)}>Home</NavLink>
            <NavLink to="/about" onClick={() => setShowMenu(false)}>About</NavLink>
            <NavLink to="/expertise" onClick={() => setShowMenu(false)}>Expertise</NavLink>
            <NavLink to="/contact" onClick={() => setShowMenu(false)}>Contact Us</NavLink>
            <NavLink to="/" className={s.pharmacy} onClick={() => setShowDrop(!showDrop)} onMouseEnter={() => setShowDrop(true)} onMouseLeave={() => setShowDrop(false)}>
                Pharmacy 
                <RiArrowDownSLine />

                {showDrop &&
                <div className={s.drop} onMouseLeave={() => setShowDrop(false)}>
                  <p>Retailers</p>
                  <p>Wholesalers</p>
                </div>
                }
            </NavLink>
          </div>

          <div className={s.auth}>   
            <CartIcon className={s.cart1} />
            <VscChromeClose className={s.close} onClick={() => setShowMenu(false)}/>
          
            <Link className={s.login} to="/">Sign In</Link>
            <Link className={s.signup} to="/">Register</Link>
          </div>
        </div>


        <div className={s.mobileIcons}> 
          <CartIcon className={s.cart2} />
          <CgMenuRight className={s.hamburger} onClick={handleClick} />
        </div>
      </div>
    </nav>
  )
}
