import React from 'react'
import { motion } from "framer-motion";
import {
    Container, Space, Title
} from '@mantine/core'

const Setting = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >

            <Container mih={"80vh"} mt={"5vh"}>

                <Title order={2} mb={"lg"} align="center">Hello World</Title>

            </Container>
        </motion.div>
    )
}

export default Setting