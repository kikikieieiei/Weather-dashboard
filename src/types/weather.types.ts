export interface WeatherData {
    main: {
        temp: number
        feels_like: number
        humidity: number
        pressure: number
    }
    weather: {
        main: string
        description: string
        icon: string
    }[]
    wind: {
        speed: number
    }
    name: string
    sys: {
        country: string
    }
}

export interface ForecastData {
    list: {
        dt: number
        main: {
            temp: number
            temp_min: number
            temp_max: number
        }
        weather: {
            main: string
            description: string
            icon: string
        }[]
        dt_txt: string
    }[]
    city: {
        name: string
        country: string
    }
}