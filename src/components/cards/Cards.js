import s from './Cards.module.css'

export default function Cards({cards}) {
  return (
    <div className="ctn">
      <h1 className='title' style={{textAlign: 'center', padding: "70px 0 30px 0"}}>Our Expertise</h1>
      <div className={s.wrp}>
        {cards.map((card, i) => 
          <div className={s.card} key={i}>
            <div className={s.img}><img src={card.img} alt={card.title}/></div>
            <h1>{card.title}</h1>
            <p>{card.desc}</p>
            {card.btn}
          </div>
        )}
      </div>
    </div>
  )
}
