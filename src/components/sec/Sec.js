import s from './Sec.module.css'

export default function Sec({ data }) {
  return (
    <div className="ctn" style={{background: data.bg}}>
      <div className={s.wrp}>
        <div className={s.img}><img src={data.img} alt='Pharmacist'/></div>
        <div className={s.txt}>
          <h1 className='title'>{data.title}</h1>
          <p className='desc'>{data.desc}</p>
          {data.btn}
        </div>
      </div>
    </div>
  )
}
