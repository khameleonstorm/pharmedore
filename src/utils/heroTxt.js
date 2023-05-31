import homeHeroImg from '../assets/floating-pills.png'
import { RiArrowRightLine } from 'react-icons/ri'

export const homeTxt = {
  title: <h1>Experience the Future of <span>Healthcare</span></h1>,
  subtitle: <p> Our platform empowers healthcare providers to make well-informed decisions regarding drug purchases, leading to substantial cost savings.</p>,
  btn: <button className='bigBtn'>Learn More <RiArrowRightLine /></button>,
  img: <img src={homeHeroImg} alt='floating pills' />
}