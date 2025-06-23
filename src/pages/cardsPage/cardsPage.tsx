import s from './cardsPage.module.scss'
import { Card } from '../../components/card/card';
import { data } from '../../data';

function CardsPage() {
  return (
    <div className={s.cards}>
    {data.map(card => (
      <Card 
        key={card.id}
        imageCard={card.imageCard}
        category={card.category}
        title={card.title}
        text={card.text}
        avatar={card.avatar}
        name={card.name}
        date={card.date} 
    />
    ))}
    
    </div>
)
}

export default CardsPage;