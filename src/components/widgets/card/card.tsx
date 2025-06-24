import { Profile } from '../profile/profile'
import s from './card.module.scss'
export type CardProps = {
  imageCardWebp: string,
  imageCard: string,
  category: string;
  title: string;
  text: string;
  avatar: string;
  avatarWebp: string;
  name: string;
  date: string;
}
export const Card = ( {imageCard, imageCardWebp, category, title, text, avatar, avatarWebp, name, date}: CardProps ) => {
  return (
    <article className={s.container}>
      <picture>
        {imageCardWebp && (
          <source srcSet={imageCardWebp} type='image/webp'/>
        )}
        <img src={imageCard} alt={title} className={s.img}/>
      </picture>
      <div className={s.textBlock}>
        <div className={s.text}>
          <span className={s.category}>{category}</span>
          <h1 className={s.title}>{title}</h1>
          <p className={s.text}>{text}</p>
        </div>
        <Profile avatar={avatar} name={name} date={date} avatarWebp={avatarWebp} />
      </div>
    </article>
  );
};
