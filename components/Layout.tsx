import React from 'react'
import { FooterSimple } from './FooterSimple'
import { HeaderResponsive } from './HeaderResponsive'

const Layout = ({ children }: any) => {
    return (
        <>
            <HeaderResponsive links={[{
                link: "/",
                label: "Home"
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
                    "link": "/imprint",
                    "label": "Imprint"
                },
            ]} />
        </>
    )
}

export default Layout