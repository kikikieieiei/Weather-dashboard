import { useState, useEffect } from 'react'
import { useDebounce } from '../hooks/useDebounce'

interface Props {
    onSearch: (city: string) => void
}

const SearchBar = ({ onSearch }: Props) => {
    const [city, setCity] = useState('')
    const debouncedCity = useDebounce(city, 800)

    useEffect(() => {
        if (debouncedCity.trim().length > 2) {
            onSearch(debouncedCity)
        }
    }, [debouncedCity, onSearch])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (city.trim()) {
            onSearch(city)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="mb-8">
            <div className="flex gap-2 max-w-md mx-auto px-4 sm:px-0">
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city name..."
                    className="flex-1 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full 
                     border border-white/30 text-white placeholder-white/60
                     focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                    type="submit"
                    className="px-8 py-3 bg-white/30 backdrop-blur-md text-white rounded-full 
                     hover:bg-white/40 transition-all duration-300
                     border border-white/30 font-medium"
                >
                    Search
                </button>
            </div>
        </form>
    )
}

export default SearchBar