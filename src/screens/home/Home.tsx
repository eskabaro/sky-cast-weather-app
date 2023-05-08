import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { Mukta } from "next/font/google";
import { Layout } from "@/components/layout/Layout";
import { Weather } from "@/components/home-weather";

import type { INewLocation } from "../add-location/type";

import s from './Home.module.scss'

const mukta = Mukta({ weight: ['600'], subsets: ['latin'] })

export const Home: FC = () => {

    const [locations, setLocations] = useState<INewLocation[]>([])

    const getLoc = () => {
        const locations: INewLocation[] = JSON.parse(localStorage.getItem('locations') || '[]')
        setLocations(locations)
    }

    useEffect(() => {
        getLoc()
    }, [])

    const date = new Date

    return <Layout title="Home">
        <h1 className={mukta.className} style={{ textAlign: 'center' }}>{date.toDateString()}</h1>
        <div className={s.container}>
            {locations.length ? (locations.map((e: INewLocation) =>
                <Weather key={e.id} {...e} locations={locations} setLocations={setLocations} />)
            ) : (
                <div className={s.title}>
                    <h2 className={mukta.className}>
                        You don't have any locations to view the weather yet.
                        <Link href={'/add-location'}>Add new location.</Link>
                    </h2>
                </div>
            )}
        </div>
    </Layout>
}