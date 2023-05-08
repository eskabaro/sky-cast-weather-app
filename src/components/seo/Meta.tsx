import { FC, PropsWithChildren } from "react";
import { IMeta } from './meta.interface'
import Head from "next/head";

const getTitle = (title: string) => `${title} | SkyCast`

export const Meta: FC<PropsWithChildren<IMeta>> = ({ title, children, description }) => {
    return <>
        <Head>
            <title>{getTitle(title)}</title>
            {description ? (
                <>
                    <meta name="description" content={description} />
                    <meta name="og:tittle" content={getTitle(title)} />
                </>
            ) : (
                <meta name="robots" content="noindex, nofollow" />
            )}
        </Head>
        {children}
    </>
}