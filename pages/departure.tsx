// @ts-nocheck
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import {
    Container, Title, TextInput,
    Space, Center, Button, Text
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { DatePicker, TimeInput } from '@mantine/dates';

const Departure = () => {
    const [visible, setVisible] = useState(false);
    const [departure, setDeparture] = useState("");
    const [destination, setDestination] = useState("");
    const [selectedDate, setSelectedDate] = useState(new Date());

    let response = `The perfect departure time is:`

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <Container mih={'80vh'} mt={'5vh'} mb={"5vh"}>
                <Title order={2} mb={"lg"} align="center">Departure</Title>

                <TextInput
                    label="Departure Point"
                    placeholder="Your current location"
                    value={departure} onChange={(event) => setDeparture(event.currentTarget.value)}
                    withAsterisk
                />
                <Space h="sm" />

                <TextInput
                    label="Destination Point"
                    placeholder="Your Destination"
                    value={destination} onChange={(event) => setDestination(event.currentTarget.value)}
                    withAsterisk
                />
                <Space h="xl" />

                <DatePicker
                    placeholder="Pick date"
                    label="Departure date"
                    value={selectedDate}
                    onChange={setSelectedDate}
                    withAsterisk
                />
                <Space h="xl" />

                <TimeInput
                    label="What time are you planning to departure?"
                    withAsterisk
                />
                <Space h="xl" />

                <Center>
                    <Button onClick={() => { setVisible(true) }}>
                        Calculate perfect departure point
                    </Button>
                </Center>
                <Space h="xl" />

                <Center>
                    {visible && (
                        <>
                            <Text>
                                {response}
                                <Text component="span" fw={500}> 10:25</Text>
                            </Text>

                        </>
                    )}
                </Center>

            </Container>

        </motion.div >
    )
}

export default Departure