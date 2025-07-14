import type { ForecastData } from '../types/weather.types'
import GlassCard from './GlassCard'

interface Props {
    forecast: ForecastData
}

const ForecastCard = ({ forecast }: Props) => {
    const dailyForecasts = forecast.list.filter(item =>
        item.dt_txt.includes('12:00:00')
    ).slice(0, 5)

    return (
        <GlassCard className="p-6 mt-6">
            <h3 className="text-xl font-bold mb-4 text-white">5-Day Forecast</h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {dailyForecasts.map((day) => (
                    <div key={day.dt} className="text-center bg-white/10 rounded-xl p-3">
                        <p className="text-sm text-white/80">
                            {new Date(day.dt_txt).toLocaleDateString('en', { weekday: 'short' })}
                        </p>
                        <img
                            src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                            alt={day.weather[0].description}
                            className="mx-auto w-16 h-16"
                        />
                        <p className="font-semibold text-white">{Math.round(day.main.temp)}°</p>
                    </div>
                ))}
            </div>
        </GlassCard>
    )
}

export default ForecastCard