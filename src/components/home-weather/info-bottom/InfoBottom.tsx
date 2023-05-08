import { FC } from "react";
import type { WeatherData } from "@/types/data";
import s from './info-bottom.module.scss'
import { Mukta } from "next/font/google";

interface IProps {
    data: WeatherData
}

const mukta = Mukta({ weight: ['500'], subsets: ['latin'] })


export const InfoBottom: FC<IProps> = ({ data }) => {

    const info = [
        {
            id: 1,
            name: 'Wind:',
            weight: data.wind.speed + ' m/s'
        },
        {
            id: 2,
            name: 'Humidity:',
            weight: data.main.humidity + ' %'
        },
        {
            id: 3,
            name: 'Pressure:',
            weight: data.main.pressure + ' hPa'
        },
        {
            id: 4,
            name: 'Visibility:',
            weight: data.visibility / 1000 + ' km'
        },
        {
            id: 5,
            name: 'Clouds:',
            weight: data.clouds.all + ' %'
        }
    ]

    return <div className={s.wrapper}>
        {info.map(e => <div className={s.info} key={e.id}>
            <span className={mukta.className}>{e.name}</span><span className={mukta.className}>{e.weight}</span>
        </div>)}
    </div>
}