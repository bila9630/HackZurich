// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import { useRouter } from 'next/router';
import {
    Container, Title, Button, Center,
    Space, Text, Image
} from '@mantine/core';
import ScratchCard from "react-scratchcard-v2";




const Ticket = () => {
    const router = useRouter()
    const [disabled, setDisabled] = useState(true);
    const [randomKey, setRandomKey] = useState('');
    const [randomValue, setRandomValue] = useState('');

    const rewards = {
        "vignette": "10% discount on vignette",
        "coffee": "A free black coffee",
        "carwash": "10% discount on your next carwash",
        "fuel": "10% discount on your next tank refill"
    }

    useEffect(() => {
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
                    <ScratchCard
                        width={280}
                        height={200}
                        image={"/zone.jpg"}
                        finishPercent={60}
                        onComplete={() => {
                            setDisabled(false);
                        }}
                    >
                        <Image
                            src={`/${randomKey}.png`}
                            height={160}
                            alt="rewards"
                            fit="contain"
                        />
                        <Text align={"center"}>{randomValue}</Text>
                    </ScratchCard>
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