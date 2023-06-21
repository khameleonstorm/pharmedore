import pharmacist from '../assets/Pharmacist.png'
import founder from '../assets/Business-woman-on-suit.png'
import { ReactComponent as Medcase } from '../assets/medcase.svg';
import { ReactComponent as Med } from '../assets/med.svg';
import { ReactComponent as Micro } from '../assets/medcase.svg';
import { ReactComponent as Star } from '../assets/star.svg';
import { ReactComponent as Gavel } from '../assets/gavel.svg';
import { ReactComponent as Balance } from '../assets/balance.svg';
import { ReactComponent as Heart } from '../assets/heart.svg';
import { RiArrowRightLine } from 'react-icons/ri'

export const secTxt1 = {
  title: <h1 className='title'>Who We Are</h1>,
  desc: <p  style={{marginTop: "-30px"}}>Pharmedore is a leading eCommerce pharmaceutical company dedicated to improving people's lives  by ensuring access to safe, affordable medicines and convenient healthcare solutions.</p>,
  btn: <button className='bigBtn'>Learn More <RiArrowRightLine /></button>,
  img: <img src={pharmacist} alt='Pharmacist'/>,
  bg: '#F0F5F8'
}

export const foundersMessage = {
  title: <h1 className='title' style={{marginBottom: "0"}}>founder's Message</h1>,
  subtitle: <h3  style={{marginTop: "-25px"}}>Cole Blackborn</h3>,
  desc: <p>Pharmedore is a leading eCommerce pharmaceutical company dedicated to improving people's lives  by ensuring access to safe, affordable medicines and convenient healthcare solutions.</p>,
  img: <img className='founder'  src={founder} alt='founder'/>,
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


export const values = [
  {
    title: <h3>Excellence</h3>,
    desc: <p>StrepsilStrepsilLorem ipsum dolor sit amet, adipiscing elit, adipiscing elit, sed diam nibh ipsuipsum dolor sit amet, m dolor sit amet, adipiscing elit, adipiscing elit, laoreet dolore magna View ipsum dolor sit amet, MoreView More</p>,
    icon: <Star width={50} height={50}/>,
  },
  {
    title: <h3>Courage</h3>,
    desc: <p>StrepsilStrepsilLorem ipsum dolor sit amet, adipiscing elit, adipiscing elit, sed diam nibh ipsuipsum dolor sit amet, m dolor sit amet, adipiscing elit, adipiscing elit, laoreet dolore magna View ipsum dolor sit amet, MoreView More</p>,
    icon: <Gavel width={50} height={50}/>,
  },
  {
    title: <h3>Intergrity & Ethics</h3>,
    desc: <p>StrepsilStrepsilLorem ipsum dolor sit amet, adipiscing elit, adipiscing elit, sed diam nibh ipsuipsum dolor sit amet, m dolor sit amet, adipiscing elit, adipiscing elit, laoreet dolore magna View ipsum dolor sit amet, MoreView More</p>,
    icon: <Balance width={50} height={50}/>,
  },
  {
    title: <h3>Passion</h3>,
    desc: <p>StrepsilStrepsilLorem ipsum dolor sit amet, adipiscing elit, adipiscing elit, sed diam nibh ipsuipsum dolor sit amet, m dolor sit amet, adipiscing elit, adipiscing elit, laoreet dolore magna View ipsum dolor sit amet, MoreView More</p>,
    icon: <Heart width={50} height={50}/>,
  },
]

export const testimonies = [
  {
    id: 'kjdghsntdfmhjldhjhbsi',
    name: 'Frank Richard',
    message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna',
  },
  {
    id: 'kjdghjhyedldhjhbsi',
    name: 'Jane Watson',
    message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna',
  },
  {
    id: 'kjdghjdmljldhjhbsi',
    name: 'Williams Cole',
    message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna',
  },
  {
    id: 'kjdghjkhgkljldhjhbsi',
    name: 'Steph Morgan',
    message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna',
  },
]