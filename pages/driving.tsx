import React from 'react'
import { motion } from "framer-motion";
import { useRouter } from 'next/router';
import {
    Container, Title, Button, Center, Space
} from '@mantine/core'
import { StatsRing } from '../components/StatsRing';
import Lottie from "lottie-react";
import Green from "../public/green.json";
import Yellow from "../public/yellow.json";
import Red from "../public/red.json";

const style = {
    height: 400,
};

const Driving = () => {
    const router = useRouter()
    const colors = ["green", "yellow", "red"];
    const randomStatus = colors[Math.floor(Math.random() * colors.length)];

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >

            <StatsRing data={[
                {
                    "label": "Current driving speed",
                    "stats": "45 km/h",
                    "progress": 100,
                    "color": "teal",
                    "icon": "car"
                },
                {
                    "label": "Speed limit",
                    "stats": "130 km/h",
                    "progress": 100,
                    "color": "teal",
                    "icon": "alert"
                },
            ]} />
            <Container mih={"80vh"}>
                <Space h={"xl"} />
                <Center>
                    {randomStatus == "green" && <Lottie animationData={Green} style={style} />}
                    {randomStatus == "yellow" && <Lottie animationData={Yellow} style={style} />}
                    {randomStatus == "red" && <Lottie animationData={Red} style={style} />}
                </Center>

                <Space h={"xl"} />

                <Center>
                    <Button
                        color="green"
                        size="lg"
                        variant="outline"
                        onClick={() => {
                            router.push("/ticket")
                        }}
                    >
                        Finish
                    </Button>
                </Center>

                <Space h={"5vh"} />

            </Container>
        </motion.div >
    )
}

export default Driving