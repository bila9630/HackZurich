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
                link: "/inventory",
                label: "Inventory"
            },
            {
                link: "/setting",
                label: "Setting"
            }]} />
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