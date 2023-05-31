import pharmacist from '../assets/Pharmacist.png'
import medcase from '../assets/medcase.svg'
import med from '../assets/med.svg'
import micro from '../assets/micro.svg'
import { RiArrowRightLine } from 'react-icons/ri'

export const secTxt1 = {
  title: 'Who We Are',
  desc: "Pharmedore is a leading eCommerce pharmaceutical company dedicated to improving people's lives  by ensuring access to safe, affordable medicines and convenient healthcare solutions.",
  btn: <button className='bigBtn'>Learn More <RiArrowRightLine /></button>,
  img: pharmacist,
  bg: '#F0F5F8'
}

export const secTxt2 = [
  {
    title: 'Medications',
    desc: 'We are dedicated to meeting your prescription needs, including those recommended by your physician. We have the capability to fill even rare or hard-to-find medications.',
    img: medcase,
    btn: <b>View More <RiArrowRightLine /></b>
  },
  {
    title: 'Pharma Solutions',
    desc: 'We serve as a bridge, connecting pharmaceutical manufacturers directly to a network of pharmacies and distributors. By eliminating intermediaries,',
    img: micro,
    btn: <b>View More <RiArrowRightLine /></b>
  },
  {
    title: 'Diagnostic Solutions',
    desc: 'Our Diagnostic Solution is designed to support healthcare providers in delivering accurate and efficient diagnoses, leading to improved patient care and outcomes.',
    img: med,
    btn: <b>View More <RiArrowRightLine /></b>
  },
]