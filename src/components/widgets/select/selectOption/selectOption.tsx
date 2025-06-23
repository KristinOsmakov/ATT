import s from './selectOption.module.scss'
type SelectOption = {
    country: string
    onClick: () => void
}
export const SelectOption = ( {country, onClick}: SelectOption ) => {
    return <div className={s.option} onClick={onClick}>{country}</div>;
}