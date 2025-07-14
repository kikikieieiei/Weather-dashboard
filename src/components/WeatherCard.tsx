import type { WeatherData } from '../types/weather.types'
import GlassCard from './GlassCard'

interface Props {
    weather: WeatherData
    unit: 'metric' | 'imperial'
}

const WeatherCard = ({ weather, unit }: Props) => {
    const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`

    return (
        <GlassCard className="p-8 max-w-md mx-auto">
            <div className="text-center text-white">
                <h2 className="text-3xl font-bold">
                    {weather.name}, {weather.sys.country}
                </h2>
                <img
                    src={iconUrl}
                    alt={weather.weather[0].description}
                    className="mx-auto w-32 h-32 drop-shadow-2xl"
                />
                <p className="text-7xl font-thin -mt-8">
                    {Math.round(weather.main.temp)}°{unit === 'metric' ? 'C' : 'F'}
                </p>
                <p className="text-xl capitalize mt-2 text-white/80">
                    {weather.weather[0].description}
                </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                    <p className="text-white/60 text-sm">Feels like</p>
                    <p className="font-semibold text-white text-lg">
                        {Math.round(weather.main.feels_like)}°{unit === 'metric' ? 'C' : 'F'}
                    </p>
                </div>
                <div className="text-center">
                    <p className="text-white/60 text-sm">Humidity</p>
                    <p className="font-semibold text-white text-lg">{weather.main.humidity}%</p>
                </div>
                <div className="text-center">
                    <p className="text-white/60 text-sm">Wind</p>
                    <p className="font-semibold text-white text-lg">
                        {weather.wind.speed} {unit === 'metric' ? 'm/s' : 'mph'}
                    </p>
                </div>
            </div>
        </GlassCard>
    )
}

export default WeatherCard