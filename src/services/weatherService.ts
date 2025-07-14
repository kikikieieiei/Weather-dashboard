import axios from 'axios'
import type { ForecastData, WeatherData } from '../types/weather.types'

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

export const getWeatherByCity = async (city: string, unit = 'metric'): Promise<WeatherData> => {
    const response = await axios.get(
        `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=${unit}`
    )
    return response.data
}

export const getForecastByCity = async (city: string, unit = 'metric'): Promise<ForecastData> => {
    const response = await axios.get(
        `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=${unit}`
    )
    return response.data
}