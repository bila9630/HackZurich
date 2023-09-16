// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import { useRouter } from 'next/router';
import {
    Container, Title, Button, Center,
    Space, Image, Text
} from '@mantine/core';
import ScratchArea from 'react-scratch-area';





const Ticket = () => {
    const router = useRouter()
    const [disabled, setDisabled] = useState(true);
    const [randomKey, setRandomKey] = useState('');
    const [randomValue, setRandomValue] = useState('');

    const settings = {
        width: 280,
        height: 200,
        canvas: "zone.jpg", //i.e #396, rgba(255,255,255,.3) or a image
        finishPercent: 50,
        onComplete: () => setDisabled(false)
    };

    useEffect(() => {
        const rewards = {
            "vignette": "10% discount on vignette",
            "coffee": "A free black coffee",
            "carwash": "10% discount on your next carwash",
            "fuel": "10% discount on your next tank refill"
        }
        const rewardKeys = Object.keys(rewards);
        const randomIndex = Math.floor(Math.random() * rewardKeys.length);
        const randomKey = rewardKeys[randomIndex];
        const randomValue = rewards[randomKey];

        setRandomKey(randomKey);
        setRandomValue(randomValue);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <Container mih={'80vh'} mt={'5vh'}>
                <Title order={2} mb={"lg"} align="center">You won a lottery ticket! 🎉</Title>

                <Space h={40} />

                <Center>
                    {/* Scratch area here */}
                    <ScratchArea {...settings}>
                        <Image
                            src={`/${randomKey}.png`}
                            height={160}
                            alt="rewards"
                            fit="contain"
                        />
                        <Text align={"center"}>{randomValue}</Text>
                    </ScratchArea>
                </Center>

                <Space h={50} />

                <Center>
                    <Button
                        disabled={disabled}
                        onClick={() => { router.push("/") }}
                    >
                        Back to homepage
                    </Button>
                </Center>

            </Container>
        </motion.div>

    )
}

export default Ticket