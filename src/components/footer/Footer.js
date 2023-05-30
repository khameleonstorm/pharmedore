import s from './Footer.module.css'
import logo from '../../assets/logo.svg'
import { GoLocation } from 'react-icons/go'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className={s.ctn}>
      <div className={s.wrp}>
        <div className={s.logo}>
          <img src={logo} alt="logo"/>
          <p className={s.subtitle}>MEDICINE WITHOUT BORDERS</p>
          <p className={s.desc}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.
          </p>
        </div>
        <div className={s.quickLinks}>
          <h1 className='title' style={{fontSize: '1.1rem', color: '#29ABE2'}}>Quick Links</h1>
          <p>Home</p>
          <p>About</p>
          <p>Expertise</p>
          <p>Contact</p>
          <p>Medications</p>
        </div>
        <div className={s.contactDetails}>
          <h1 className='title' style={{fontSize: '1.1rem', color: '#29ABE2'}}>Contact Details</h1>
          <p><GoLocation /> 1234 Street Name, City Name, United States</p>
          <p><AiOutlineMail /> support@pharmedore.com</p>
          <p><AiOutlinePhone /> +1(431) 023 9876</p>
        </div>
        <div className={s.legal}>
          <h1 className='title' style={{fontSize: '1.1rem', color: '#29ABE2'}}>Legal</h1>
          <p>Terms of use</p>
          <p>Privacy policy</p>
          <div className={s.social}>
            <FaFacebookSquare size='1.6rem'/>
            <FaInstagramSquare size='1.6rem'/>
            <FaTwitterSquare size='1.6rem'/>
          </div>
        </div>
      </div>

      <div className={s.copyright}>Copyright 2023 All Rights Reserved | Pharmedore</div>
    </div>
  )
}
