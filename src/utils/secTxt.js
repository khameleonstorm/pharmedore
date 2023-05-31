import pharmacist from '../assets/Pharmacist.png'
import { ReactComponent as Medcase } from '../assets/medcase.svg';
import { ReactComponent as Med } from '../assets/med.svg';
import { ReactComponent as Micro } from '../assets/medcase.svg';
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
    desc: 'We cater to your prescription needs, including those recommended by your physician. Our expertise lies in filling rare or hard-to-find medications.',
    icon: <Medcase />,
    btn: <b>View More <RiArrowRightLine /></b>
  },
  {
    title: 'Pharma Solutions',
    desc: 'We serve as a bridge, connecting pharmaceutical manufacturers directly to a network of pharmacies and distributors. By eliminating intermediaries,',
    icon: <Micro />,
    btn: <b>View More <RiArrowRightLine /></b>
  },
  {
    title: 'Diagnostic Solutions',
    desc: 'Our Diagnostic Solution is designed to support healthcare providers in delivering accurate and efficient diagnoses to improved care and outcomes.',
    icon: <Med />,
    btn: <b>View More <RiArrowRightLine /></b>
  },
]