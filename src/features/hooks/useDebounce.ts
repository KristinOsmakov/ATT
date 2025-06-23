import { ChangeEvent, useEffect, useState } from "react"

type useDebounce = {
    initialValue: string,
    onChange: (value: string) => void,
    delay?: number,
}
export const useDebounce = ({initialValue = '', onChange, delay = 300}: useDebounce) => {
    const [inputValue, setInputValue] = useState(initialValue)

    useEffect(() => {
        setInputValue(initialValue)
    }, [initialValue])

    useEffect(() => {
        const timer = setTimeout(() => {
            onChange(inputValue)
        }, delay)
        return () => clearTimeout(timer)
    }, [inputValue, onChange, delay])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    return {
        inputValue,
        setInputValue,
        handleChange,
    }
}