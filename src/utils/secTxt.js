import pharmacist from '../assets/Pharmacist.png'
import medcase from '../assets/medcase.svg'
import med from '../assets/med.svg'
import micro from '../assets/micro.svg'
import { RiArrowRightLine } from 'react-icons/ri'

export const secTxt1 = {
  title: 'Who We Are',
  desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.',
  btn: <button className='bigBtn'>Learn More <RiArrowRightLine /></button>,
  img: pharmacist,
  bg: '#F0F5F8'
}

export const secTxt2 = [
  {
    title: 'Medications',
    desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna ',
    img: medcase,
    btn: <b>View More <RiArrowRightLine /></b>
  },
  {
    title: 'Pharma Solutions',
    desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna ',
    img: micro,
    btn: <b>View More <RiArrowRightLine /></b>
  },
  {
    title: 'Diagnostic Solutions',
    desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna ',
    img: med,
    btn: <b>View More <RiArrowRightLine /></b>
  },
]