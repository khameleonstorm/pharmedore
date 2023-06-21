import s from './Sec.module.css'

export default function Sec({ data }) {
  return (
    <div className={s.ctn} style={{background: data.bg}}>
      <div className={s.wrp}>
        <div className={s.img}>{data.img}</div>
        <div className={s.txt}>
          {data.title}
          {data?.subtitle}
          {data.desc}
          {data?.btn}
        </div>
      </div>
    </div>
  )
}
