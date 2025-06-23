import { useState } from "react";
import { SelectOption } from "./selectOption/selectOption";
import s from './select.module.scss';
import ArrowDown from "../../../shared/assets/icons/ArrowDown";
import ArrowUp from "../../../shared/assets/icons/ArrowUp";
import { SelectSearch } from "./selectSearch/selectSearch";
import { useFiltereCountries } from "../../../features/hooks/useFilterCountries";

export const Select = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [searchQuery, setSearchQuery] = useState('')
    const {filteredCountries, hasError} = useFiltereCountries(searchQuery)
    
    return (
        <div className={s.selectContainer}>
            <div 
                className={`${s.selectedValue} ${isOpen ? s.open : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{selectedOption || 'Ваша страна проживания'}</span>
                {isOpen ? <ArrowUp /> : <ArrowDown />}
            </div>
            
            {isOpen && (
                <div>
                    <SelectSearch 
                        value={searchQuery} 
                        onChange={setSearchQuery}
                        error={hasError}
                    />
                    <div className={s.options}>
                        {filteredCountries.length > 0 && 
                            filteredCountries.map(country => (
                                <SelectOption 
                                    key={country.id} 
                                    country={country.countries}
                                    onClick={() => {
                                        setSelectedOption(country.countries);
                                        setIsOpen(false);
                                        setSearchQuery('');
                                    }}
                                />
                            ))}
                    </div>
                </div>
            )}
        </div>
    );
};