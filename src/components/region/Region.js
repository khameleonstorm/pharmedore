import s from './Region.module.css'
import region from '../../assets/Regions.png'

export default function Region() {
  return (
    <div className='ctn' style={{background: 'white', margin: '300px 0'}}>
      <h1 className='title' style={{textAlign: 'center', padding: "70px 0 30px 0"}}>Operational Regions</h1>
      <div className={s.wrp}>
        <img src={region} alt='region'/>
      </div>
    </div>
  )
}
