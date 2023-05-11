import { FC } from "react";
import s from './Preloader.module.scss'
import Image from "next/image";
import { Mukta } from "next/font/google";

const mukta = Mukta({weight: ['600'], subsets: ['latin']})

export const Preloader: FC = () => {
    return <div className={s.wrapper}>
        <Image src={'/favicon.ico'} width={100} height={100} priority alt=""/>
        <h1 className={mukta.className}>Sky Cast</h1>
    </div>
}