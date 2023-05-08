import { FC } from "react";
import { Mukta } from 'next/font/google'
import Link from "next/link";
import s from './Header.module.scss'
import { useRouter } from "next/router";

const mukta = Mukta({ weight: ['500', '700'], subsets: ['latin'] })

export const Header: FC = () => {

    const { pathname } = useRouter()

    return <header className={s.wrapper}>
        <h1 className={mukta.className}>SkyCast</h1>
        <nav>
            <Link href={'/'} className={mukta.className}>
                <button className={`${s.box} ${pathname === '/' ? s.active : ''}`}>
                    Home
                </button>
            </Link>
            <Link href={'/add-location'} className={mukta.className}>
                <button className={`${s.box} ${pathname === '/add-location' ? s.active : ''}`}>
                    Add new locatiom
                </button>
            </Link>
        </nav>
    </header>
}