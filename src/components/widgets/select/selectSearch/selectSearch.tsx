import clsx from 'clsx';
import Search from '../../../../shared/assets/icons/Search'
import s from './selectSearch.module.scss'

type SelectSearch = {
    value: string;
    onChange: (value: string) => void;
    error: boolean
}
export const SelectSearch = ({value, onChange, error = false}: SelectSearch) => {
    
    return (
        <div className={s.searchContainer}>
            <Search className={s.searchIcon}/>
            <input
                type='search'
                className={clsx(s.selectedSearchContainer, error && s.error)}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}