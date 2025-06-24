import s from './cardsPage.module.scss'
import { Card } from '../../components/widgets/card/card';
import { data } from '../../components/widgets/card/data';
import { Container } from '../../components/widgets/container/container';

function CardsPage() {
  return (
    <Container className={s.cards}>
      {data.map(card => (
      <Card 
        key={card.id}
        imageCard={card.imageCard}
        imageCardWebp={card.imageCardWebp}
        category={card.category}
        title={card.title}
        text={card.text}
        avatar={card.avatar}
        avatarWebp={card.avatarWebp}
        name={card.name}
        date={card.date} 
    />
    ))}
    </Container>
)
}

export default CardsPage;