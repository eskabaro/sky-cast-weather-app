import { FC, PropsWithChildren } from "react";
import { Header } from "./header";
import { Meta } from "../seo/Meta";
import { IMeta } from "../seo/meta.interface";

export const Layout: FC<PropsWithChildren<IMeta>> = ({ children, title, description }) => {
    return <Meta title={title} description={description}>
        <Header />
        {children}
    </Meta>
}