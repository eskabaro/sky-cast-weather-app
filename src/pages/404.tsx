import { FC } from "react";
import { Layout } from "@/components/layout/Layout";

import { Mukta } from "next/font/google";

const mukta = Mukta({weight: ['600'], subsets: ['latin']})

const NotFound: FC = () => {
    return <Layout title="Not found">
        <div className={mukta.className} style={{textAlign: 'center', marginTop: '3rem'}}>
            <h2>Page not found</h2>
        </div>
    </Layout>
}

export default NotFound
