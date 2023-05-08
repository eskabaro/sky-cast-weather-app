import { FC } from "react";
import Image from "next/image";

import type { INewLocation } from "@/screens/add-location/type";

import s from './Buttom.module.scss'

interface IProps {
    id: number,
    locations: INewLocation[],
    setLocations: (locations: INewLocation[]) => void
}

export const Button: FC<IProps> = ({ id, locations, setLocations }) => {

    const deleteItem = (id: number, locations: INewLocation[]) => {
        locations.filter(e => e.id !== id)
        const locationsData = JSON.parse(localStorage.getItem('locations') || '[]')
        const index = locationsData.findIndex((e: INewLocation) => e.id === id)
        if (index !== -1) {
            locationsData.splice(index, 1)
            localStorage.setItem('locations', JSON.stringify(locationsData))
        }
        setLocations(locations.filter((e) => e.id !== id))
    }

    return <button className={s.btn} onClick={() => deleteItem(id, locations)}>
        <Image src={'/Xmark.svg'} alt="delete" width={15} height={15} />
    </button>
}
