import { useEffect, useState, useCallback } from 'react'
import SearchBar from '../components/SearchBar'
import WeatherCard from '../components/WeatherCard'
import { getForecastByCity, getWeatherByCity } from '../services/weatherService'
import type { ForecastData, WeatherData } from '../types/weather.types'
import LoadingSpinner from '../components/LoadingSpinner'
import ForecastCard from '../components/ForecastCard'
import ErrorMessage from '../components/ErrorMessage'

const Home = () => {
    const [weather, setWeather] = useState<WeatherData | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [forecast, setForecast] = useState<ForecastData | null>(null)
    const [unit, setUnit] = useState<'metric' | 'imperial'>('metric')
    const [currentCity, setCurrentCity] = useState('')

    const handleSearch = useCallback(async (city: string) => {
        try {
            setLoading(true)
            setError('')
            const [weatherData, forecastData] = await Promise.all([
                getWeatherByCity(city, unit),
                getForecastByCity(city, unit)
            ])
            setWeather(weatherData)
            setForecast(forecastData)
            setCurrentCity(city)
            localStorage.setItem('lastCity', city)
        } catch (err: any) {
            if (err.response?.status === 404) {
                setError('City not found. Please check the spelling.')
            } else if (err.response?.status === 401) {
                setError('API key issue. Please check configuration.')
            } else {
                setError('Something went wrong. Please try again.')
            }
            setWeather(null)
            setForecast(null)
        } finally {
            setLoading(false)
        }
    }, [unit])

    useEffect(() => {
        const lastCity = localStorage.getItem('lastCity')
        if (lastCity) handleSearch(lastCity)
    }, [handleSearch])

    return (
        <div className="min-h-screen p-4 mb-10">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-5xl font-thin text-center m-12 text-white drop-shadow-lg">
                    Weather Dashboard
                </h1>

                <div className="flex justify-center mb-6">
                    <button
                        onClick={() => setUnit(unit === 'metric' ? 'imperial' : 'metric')}
                        className="px-6 py-2 bg-white/20 backdrop-blur-md rounded-full 
                     hover:bg-white/30 transition-all duration-300
                     border border-white/30 text-white font-medium"
                    >
                        °{unit === 'metric' ? 'C' : 'F'}
                    </button>
                </div>

                <SearchBar onSearch={handleSearch} />

                {loading && <LoadingSpinner />}

                {error && <ErrorMessage message={error} />}

                {weather && !loading && (
                    <WeatherCard weather={weather} unit={unit} />
                )}

                {forecast && !loading && (
                    <ForecastCard forecast={forecast} />
                )}
            </div>
        </div>
    )
}

export default Home