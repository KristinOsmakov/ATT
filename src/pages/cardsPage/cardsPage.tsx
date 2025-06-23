import s from './cardsPage.module.scss'
import { Card } from '../../components/card/card';
import { data } from '../../data';
import { Container } from '../../components/container/container';

function CardsPage() {
  return (
    // <div className={s.cards}>
    // {data.map(card => (
    //   <Card 
    //     key={card.id}
    //     imageCard={card.imageCard}
    //     category={card.category}
    //     title={card.title}
    //     text={card.text}
    //     avatar={card.avatar}
    //     name={card.name}
    //     date={card.date} 
    // />
    // ))}
    
    // </div>
    <Container className={s.cards}>
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
    </Container>
)
}

export default CardsPage;