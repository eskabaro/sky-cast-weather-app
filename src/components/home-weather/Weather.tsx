import { FC, useEffect, useState } from "react";
import type { WeatherData } from "@/types/data";
import type { INewLocation } from "@/screens/add-location/type";
import s from './Weather.module.scss'
import { Mukta } from "next/font/google";
import { Button } from "@/ui/btn-delete-item";
import { InfoHead } from "./info";
import { InfoBottom } from "./info-bottom";

const mukta = Mukta({ weight: ['500'], subsets: ['latin'] })

interface IProps {
    id: number,
    name: string,
    lat: number,
    lng: number,
    locations: INewLocation[],
    setLocations: (locations: INewLocation[]) => void
}

export const Weather: FC<IProps> = ({ lat, lng, id, locations, setLocations }) => {

    const [data, setData] = useState<WeatherData>()

    const getWeather = async () => {
        try {
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=6abd0d51800a03d188ef7deb3680c172`)
            const res = await data.json()
            setData(res)
        } catch (error) {
            alert(error)
        }
    }
    useEffect(() => {
        getWeather()
    }, [])

    if (data) {
        return <div className={s.item}>
            <Button id={id} locations={locations} setLocations={setLocations} />
            <h1 className={mukta.className}>{data?.name}</h1>
            <div className={s.info}>
                <InfoHead data={data} />
                <InfoBottom data={data} />
            </div>
        </div>
    } else return <h2>Weather hon found</h2>
}