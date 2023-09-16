import { motion } from "framer-motion";
import { useRouter } from 'next/router';
import {
  Card, Container, Grid, Text, Title,
  Button, Space, createStyles, Modal,
  Image, Center, TextInput
} from '@mantine/core'
import React, { useContext } from 'react'
import { DatabaseContext } from "../contexts/DatabaseContext";
import Lottie from "lottie-react";
import Car from "../public/car.json"
import Ticket from "../public/ticket.json"
import { useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form';


const style = {
  height: 220,
};

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',

    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },
}));


export default function Home() {
  const { classes } = useStyles();
  const router = useRouter()
  const { setActivePage }: any = useContext(DatabaseContext)
  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      start: "",
      destination: "",
    },

    validate: {
      start: (value) => value.trim().length < 1,
      destination: (value) => value.trim().length < 1,
    },
  })

  return (
    <Container mih={"80vh"} mt={"5vh"}>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title order={1} align="center" >Your commute, our{" "}
          <Text component="span" variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>
            commitment
          </Text>
        </Title>

        {/* Modal part */}
        <Modal opened={opened} onClose={close} title="Enter your destination" centered>
          {/* Form */}
          <form onSubmit={form.onSubmit(async (values) => {
            router.push("/driving")
            setActivePage("/driving")
          })}>

            <TextInput
              label="Departure Point"
              placeholder="Your current location"
              withAsterisk
              {...form.getInputProps("start")}
            />
            <Space h="sm" />

            <TextInput
              label="Destination Point"
              placeholder="Your Destination"
              withAsterisk
              {...form.getInputProps("destination")}
            />
            <Space h="xl" />

            <Center>
              <Button type="submit">
                Lets drive
              </Button>
            </Center>

          </form>
        </Modal>

      </motion.div>

      <Space h={70} />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeIn" }}
      >
        <Grid gutter={"xl"} gutterMd={110}>
          <Grid.Col xs={12} md={6} lg={6}>
            <Card
              shadow="sm" p={1} radius="md"
              withBorder className={classes.card}
              sx={{ cursor: "pointer" }}
              onClick={open}
            >
              <Card.Section>
                {/* Lottie file */}
                <Lottie animationData={Car} style={style} />
              </Card.Section>

              <Text pt={10} weight={500} align="center">Start driving</Text>

              <Text size="sm" color="dimmed" align="center">
                Start your journey and help us prevent traffic congestion
              </Text>

              <Button
                variant="light" color="green" fullWidth mt="md" radius="md"
              >
                Start driving 🚀
              </Button>
            </Card>
          </Grid.Col>

          <Grid.Col xs={12} md={6} lg={6}>
            <Card
              shadow="sm" p={1} radius="md"
              withBorder className={classes.card}
              sx={{ cursor: "pointer" }}
              onClick={() => {
                router.push("/inventory")
                setActivePage("/inventory")
              }}
            >
              <Card.Section>
                <Lottie animationData={Ticket} loop={false} style={style} />
              </Card.Section>

              <Text pt={10} weight={500} align="center">Prize inventory</Text>

              <Text size="sm" color="dimmed" align="center">
                See all your prizes and get more information about them
              </Text>

              <Button
                variant="light" color="green" fullWidth mt="md" radius="md"
              >
                Check inventory 🏆
              </Button>
            </Card>
          </Grid.Col>

        </Grid>
      </motion.div>


    </Container>
  );
}
