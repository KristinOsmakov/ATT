import { Profile } from '../profile/profile'
import s from './card.module.scss'
export type CardProps = {
  imageCard: string,
  category: string;
  title: string;
  text: string;
  avatar: string;
  name: string;
  date: string;
}
export const Card = ( {imageCard, category, title, text, avatar, name, date}: CardProps ) => {
  return (
    <section className={s.container}>
      <img src={imageCard} alt={title} className={s.img}/>
      <div className={s.textBlock}>
        <div className={s.text}>
          <span className={s.category}>{category}</span>
          <h1 className={s.title}>{title}</h1>
          <p className={s.text}>{text}</p>
        </div>
        <Profile avatar={avatar} name={name} date={date} />
      </div>
    </section>
  );
};
