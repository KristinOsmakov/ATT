import { useState, useEffect } from 'react';
import clsx from 'clsx';
import Search from '../../../../shared/assets/icons/Search';
import s from './selectSearch.module.scss';
import { useDebounce } from '../../../../features/hooks/useDebounce';

type SelectSearchProps = {
  value: string;
  onChange: (value: string) => void;
  error: boolean;
};

export const SelectSearch = ({ value, onChange, error = false }: SelectSearchProps) => {
    const {inputValue, handleChange} = useDebounce({
        initialValue: value,
        onChange,
        delay: 300
    })

  return (
    <div className={s.searchContainer}>
      <Search className={s.searchIcon}/>
      <input
        type='search'
        className={clsx(s.selectedSearchContainer, error && s.error)}
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};