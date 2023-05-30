import { NavLink, Link } from "react-router-dom"
import s from "./Nav.module.css"
import { useState } from "react"
import logo from "../../assets/logo.svg"
import { CgMenuRight } from "react-icons/cg"

// import cart icon as svg
import { ReactComponent as CartIcon } from '../../assets/cart.svg';

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false)

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

        <div className={s.menu}  style={showMenu ? {right:  "0"} : {right:  '-100%'}} onClick={handleClick}>
          <div className={s.links}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">About</NavLink>
            <NavLink to="/">Expertise</NavLink>
            <NavLink to="/">Contact Us</NavLink>
            <NavLink to="/">Pharmacy <span className={s.down}>{`>`}</span></NavLink>
          </div>

          <div className={s.auth}>   
            <CartIcon className={s.cart1} />
          
            <Link className={s.login} to="/">Sign In</Link>
            <Link className={s.signup} to="/">Register</Link>
          </div>
        </div>

        <CgMenuRight className={s.hamburger} onClick={handleClick} />
        <CartIcon className={s.cart2} />
      </div>
    </nav>
  )
}
