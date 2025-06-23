import { useMemo } from "react"
import { dataCountries } from "../../components/widgets/select/dataCountries"

export const useFiltereCountries = (searchQuery: string) => {
    return useMemo(() => {
        const filtered = dataCountries.filter(country => 
            country.countries.toLowerCase().startsWith(searchQuery.toLowerCase()))

        return {
            filteredCountries: filtered,
            hasError: searchQuery.length > 0 && filtered.length === 0
        }
}, [searchQuery])
}