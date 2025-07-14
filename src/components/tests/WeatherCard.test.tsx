import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import WeatherCard from '../WeatherCard'

const mockWeather = {
    main: { temp: 25, feels_like: 26, humidity: 60, pressure: 1013 },
    weather: [{ main: 'Clear', description: 'clear sky', icon: '01d' }],
    wind: { speed: 3.5 },
    name: 'Bangkok',
    sys: { country: 'TH' }
}

describe('WeatherCard', () => {
    it('displays weather information correctly', () => {
        render(<WeatherCard weather={mockWeather} unit="metric" />)

        expect(screen.getByText('Bangkok, TH')).toBeInTheDocument()
        expect(screen.getByText('25°C')).toBeInTheDocument()
        expect(screen.getByText('clear sky')).toBeInTheDocument()
        expect(screen.getByText('60%')).toBeInTheDocument()
    })

    it('converts to Fahrenheit correctly', () => {
        render(<WeatherCard weather={mockWeather} unit="imperial" />)
        expect(screen.getByText('25°F')).toBeInTheDocument()
    })
})