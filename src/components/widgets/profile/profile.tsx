import s from './profile.module.scss'
export type ProfileProps = {
    avatarWebp: string,
    avatar: string,
    name: string,
    date: string
  }
export const Profile = ( {avatarWebp, avatar, name, date}: ProfileProps ) => {
    return (
    <div className={s.container}>
        <picture>
            {avatarWebp && (
                <source srcSet={avatarWebp} type='image/webp'/>
            )}
            <img src={avatar} alt={name} className={s.avatar}/>
        </picture>
        <div className={s.info}>
            <span className={s.name}>{name}</span>
            <time className={s.date}>{date}</time>
        </div>
    </div>
    )
}