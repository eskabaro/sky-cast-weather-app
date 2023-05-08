import { FC } from "react";
import type { WeatherData } from "@/types/data";
import { Mukta } from "next/font/google";
import s from './Info-head.module.scss'

interface IPorps {
    data: WeatherData
}

const mukta = Mukta({weight: ['500'], subsets: ['latin']})

export const InfoHead: FC<IPorps> = ({ data }) => {

    const temp = data?.main.temp ? data?.main.temp - 273.15 : 0
    const max_temp = data.main.temp_max ? data.main.temp_max - 273.15 : 0
    const min_temp = data.main.temp_min ? data.main.temp_min - 273.15 : 0
    
    return <div className={s.wrapper}>
        <img src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`} alt="icon" />
        <span className={mukta.className} style={{fontSize: '70px', lineHeight: '60px'}}>{Math.round(temp)}°</span>
        <span className={mukta.className}>{data?.weather[0].description}</span>
        <span className={mukta.className}>max: {Math.round(max_temp)}°, min: {Math.round(min_temp)}°</span>
    </div>
}