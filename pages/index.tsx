import { motion } from "framer-motion";
import { useRouter } from 'next/router';
import {
  Card, Container, Grid, Text, Title,
  Button, Space, createStyles, Modal,
  Center,

} from '@mantine/core'
import React, { useContext } from 'react'
import { DatabaseContext } from "../contexts/DatabaseContext";
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
        <Title order={1} align="center" >Our new{" "}
          <Text component="span" variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>
            Slogan
          </Text>
        </Title>

        <Space h="lg" />
        <Center>
          <Button onClick={() => { router.push("/ticket") }}>Next</Button>
        </Center>

      </motion.div>
    </Container>
  );
}
