import React from 'react'
import { FooterSimple } from './FooterSimple'
import { HeaderResponsive } from './HeaderResponsive'

const Layout = ({ children }: any) => {
    return (
        <>
            <HeaderResponsive links={[{
                link: "/",
                label: "Homepage"
            },
            {
                link: "/driving",
                label: "Driving"
            },
            {
                link: "/inventory",
                label: "Inventory"
            }
            ]} />
            <main>{children}</main>
            <FooterSimple links={[
                {
                    "link": "/impressum",
                    "label": "Impressum"
                },
            ]} />
        </>
    )
}

export default Layout