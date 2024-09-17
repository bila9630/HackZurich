// @ts-nocheck
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import {
    Container, Title, TextInput,
    Space, Center, Button, Text
} from '@mantine/core';
import { DatePicker, TimeInput } from '@mantine/dates';
import { useForm } from '@mantine/form';

const Departure = () => {
    const [displayLoading, setDisplayLoading] = useState(false)
    const [displaySuccess, setDisplaySuccess] = useState(false)
    const [displayError, setDisplayError] = useState(false)

    const [destination, setDestination] = useState("");
    const [selectedDate, setSelectedDate] = useState(new Date());

    const form = useForm({
        initialValues: {
            departure: "",
            destination: "",
            date: new Date(),
            hour: new Date(),
        },

        validate: {
            departure: (value) => value.trim().length < 1,
            destination: (value) => value.trim().length < 1,
        },
    })



    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <Container size={700} mih={"70vh"} mt={'5vh'} mb={"5vh"}>
                <Title order={2} mb={"lg"} align="center">Departure</Title>

                <form onSubmit={form.onSubmit(async (values) => {
                    setDisplayError(false)
                    setDisplaySuccess(false)
                    setDisplayLoading(true)

                    const dateObj = new Date(values.date)
                    const hourObj = new Date(values.hour)

                    const datePart = dateObj.toISOString().split('T')[0];
                    const timePart = hourObj.toISOString().split('T')[1];

                    const combinedTimestamp = `${datePart}T${timePart}`;

                    let postingData = {
                        departure: values.departure,
                        destination: values.destination,
                        date: combinedTimestamp,
                    }

                    // ADJUST THE URL
                    const response = await fetch("/api/test", {
                        method: "POST",
                        body: JSON.stringify(postingData),
                    })
                    setDisplayLoading(false)

                    if (response.status === 200) {
                        setDisplaySuccess(true)
                        console.log(response)
                    } else {
                        setDisplayError(true)
                    }
                })}>

                    <TextInput
                        withAsterisk
                        placeholder="Your current location"
                        label="Departure Point"
                        {...form.getInputProps("departure")}
                    />
                    <Space h="sm" />

                    <TextInput
                        label="Destination Point"
                        placeholder="Your Destination"
                        value={destination} onChange={(event) => setDestination(event.currentTarget.value)}
                        withAsterisk
                        {...form.getInputProps("destination")}
                    />
                    <Space h="xl" />

                    <DatePicker
                        placeholder="Pick date"
                        label="Departure date"
                        value={selectedDate}
                        onChange={setSelectedDate}
                        withAsterisk
                        {...form.getInputProps("date")}
                    />
                    <Space h="xl" />

                    <TimeInput
                        label="What time are you planning to departure?"
                        withAsterisk
                        {...form.getInputProps("hour")}
                    />
                    <Space h="xl" />

                    <Center>
                        <Button type="submit" size="md">
                            Calculate perfect departure point
                        </Button>
                    </Center>
                    <Space h="xl" />
                </form>

                <Center>
                    {displayError && (<Text c="red" mb="xl">There was an error! Please try an another time!</Text>)}
                    {displayLoading && (<Text ta={"center"} mt={10} c={"yellow"}>Loading...</Text>)}
                    {displaySuccess && (
                        <>
                            <Text>
                                The perfect departure time is:
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