import homeHeroImg from '../assets/floating-pills.png'
import aboutHeroBg from '../assets/abstract-blur-shopping-mall.jpg'
import malePh from '../assets/white-male-pharmacist.png'
import femalePh from '../assets/white-female-pharmacist.png'
import { RiArrowRightLine } from 'react-icons/ri'

export const homeTxt = {
  title: <h1>Experience the Future of <span>Healthcare</span></h1>,
  subtitle: <p> Our platform empowers healthcare providers to make well-informed decisions regarding drug purchases, leading to substantial cost savings.</p>,
  btn: <button className='bigBtn'>Learn More <RiArrowRightLine /></button>,
  img: <img src={homeHeroImg} alt='floating pills' />
}

export const aboutTxt = {
  title: <h1>About <span>Us</span></h1>,
  subtitle: <p>Pharmedore is a leading eCommerce pharmaceutical company dedicated to improving people's lives by ensuring access to safe, affordable medicines and convenient healthcare solutions..</p>,
  img1: <img src={malePh} alt='pharmacist' />,
  img2: <img src={femalePh} alt='pharmacist' />,
  bg: aboutHeroBg
}