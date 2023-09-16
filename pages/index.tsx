import { motion } from "framer-motion";
import { useRouter } from 'next/router';
import {
  Card, Container, Grid, Text, Title,
  Image, Button, Space
} from '@mantine/core'
import React, { useContext } from 'react'
import { DatabaseContext } from "../contexts/DatabaseContext";
import Lottie from "lottie-react";
import Car from "../public/car.json"
import Ticket from "../public/ticket.json"

const style = {
  height: 220,
};

export default function Home() {
  const router = useRouter()
  const { setActivePage }: any = useContext(DatabaseContext)

  return (
    <Container mih={"80vh"} mt={"5vh"}>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title order={1} align="center" >Smoother roads, greener{" "}
          <Text component="span" variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>
            Tomorrow
          </Text>
        </Title>
      </motion.div>

      <Space h={70} />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeIn" }}
      >
        <Grid gutter={"xl"} gutterMd={140}>
          <Grid.Col xs={12} md={6} lg={6}>
            <Card shadow="sm" p={1} radius="md" withBorder>
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
                onClick={() => {
                  router.push("/driving")
                  setActivePage("/driving")
                }}
              >
                Start driving 🚀
              </Button>
            </Card>
          </Grid.Col>

          <Grid.Col xs={12} md={6} lg={6}>
            <Card shadow="sm" p={1} radius="md" withBorder>
              <Card.Section>
                <Lottie animationData={Ticket} style={style} />
              </Card.Section>

              <Text pt={10} weight={500} align="center">Prize inventory</Text>

              <Text size="sm" color="dimmed" align="center">
                See all your prizes and get more information about them
              </Text>

              <Button
                variant="light" color="green" fullWidth mt="md" radius="md"
                onClick={() => {
                  router.push("/inventory")
                  setActivePage("/inventory")
                }}
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
