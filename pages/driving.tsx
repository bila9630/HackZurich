import React from 'react'
import { motion } from "framer-motion";
import { useRouter } from 'next/router';
import {
    Container, Title, Button, Center
} from '@mantine/core'

const Driving = () => {
    const router = useRouter()


    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >

            <Container mih={"80vh"} mt={"5vh"}>

                <Title order={2} mb={"lg"} align="center">Hello World</Title>
                <Center>
                    <Button
                        color="green"
                        onClick={() => {
                            router.push("/ticket")
                        }}
                    >
                        Finish
                    </Button>
                </Center>
            </Container>
        </motion.div>
    )
}

export default Driving