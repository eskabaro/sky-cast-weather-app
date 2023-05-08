import { FC, useState } from "react";
import Link from "next/link";
import { Layout } from "@/components/layout/Layout";
import type { INewLocation } from "./type";
import s from './Location.module.scss'
import Image from "next/image";

export const Location: FC = () => {
    const [value, setValue] = useState<string>('')
    const [resName, setResName] = useState<string[]>([])
    const [lat, setLat] = useState<number>(0)
    const [lng, setLng] = useState<number>(0)

    const getCity = async (value: string) => {
        try {
            const data = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(value)}&key=a7385109eca14211bccab2664b72a505`)
            const res = await data.json()
            if (res.total_results > 0) {
                const result = res.results[0]
                if (result.components.city || result.components.country) {
                    setLat(result.geometry.lat)
                    setLng(result.geometry.lng)
                    setResName([...resName, result.formatted])
                    return true
                }
            } else alert(`Not found: ${value}`)
        } catch (error) {
            console.log(error);
        }
    }

    const handleValue = (value: string) => {
        if (value) getCity(value)
    }

    const addToStorage = (name: string) => {
        const locations = JSON.parse(localStorage.getItem('locations') || '[]')

        const newLocation: INewLocation = {
            id: Date.now(),
            name: name,
            lat: lat,
            lng: lng
        }

        locations.push(newLocation)

        localStorage.setItem('locations', JSON.stringify(locations))
    }

    return <Layout title="Add new location" description="You can add new locations to view the weather">
        <div className={s.wrapper}>
            <label>
                <input type="text" onChange={e => setValue(e.target.value)} />
                <button onClick={() => handleValue(value)}>
                    <Image src={'/Search.svg'} width={12} height={12} alt="Search" />
                </button>
            </label>
        </div>
        <div className={s.box__res}>
            {resName && resName.map((e: string, i: number) => <button key={i} onClick={() => addToStorage(e)} className={`${resName ? s.active : ''}`}>
                <Link href={'/'}>
                    {e}
                </Link>
            </button>)}
        </div>
    </Layout>
}
