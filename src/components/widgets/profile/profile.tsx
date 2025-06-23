import s from './profile.module.scss'
export type ProfileProps = {
    avatar: string,
    name: string,
    date: string
  }
export const Profile = ( {avatar, name, date}: ProfileProps ) => {
    return (
    <div className={s.container}>
        <img src={avatar} alt={name} className={s.avatar}/>
        <div className={s.info}>
            <span className={s.name}>{name}</span>
            <time className={s.date}>{date}</time>
        </div>
    </div>
    )
}