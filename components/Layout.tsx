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
                link: "/rewards",
                label: "Rewards"
            },
            {
                link: "/profile",
                label: "Profile"
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