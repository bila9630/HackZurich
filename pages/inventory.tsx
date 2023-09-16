// @ts-nocheck
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Container, Title, Text,
  createStyles, SimpleGrid, Card,
  Image, AspectRatio, Center,
  Button, Space, Modal
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const mockdata = [
  {
    title: '10% discount on your next carwash',
    image: 'carwash.png',
  },
  {
    title: 'A free black coffee',
    image: 'coffee.png',
  },
  {
    title: '10% discount on your next tank refill',
    image: 'fuel.png',
  },
  {
    title: '10% discount on vignette',
    image: 'vignette.png',
  },
  {
    title: 'A free black coffee',
    image: 'coffee.png',
  },
  {
    title: '10% discount on your next tank refill',
    image: 'fuel.png',
  }
];

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',

    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));

const Inventory = () => {
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);

  const cards = mockdata.map((article) => (
    <Card key={article.title} p="md" radius="md" component="a" href="#" withBorder shadow="sm" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} alt="lol" />
      </AspectRatio>

      <Center>
        <Text className={classes.title} mt={5}>
          {article.title}
        </Text>
      </Center>

      <Center>
        <Text color='dimmed' align={"center"}>
          You are eligible to redeem this prize until the end of the year
        </Text>
      </Center>

      <Space h="md" />

      <Center>
        <Button
          variant="light" fullWidth radius="md"
          onClick={open}
        >
          Redeem
        </Button>
      </Center>
    </Card>
  ));

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Container mih={'80vh'} mt={'5vh'} mb={"5vh"}>
        {/* Modal part */}
        <Modal opened={opened} onClose={close} title="Your prize" centered>
          <Image src={"rickroll.png"} alt="qr code to redeem prize" height={300} fit={"contain"} />
          <Space h={"md"}/>
          <Center>
            <Text c={"dimmed"}>Code: 3FW23DH</Text>
          </Center>
        </Modal>

        {/* Actual page part */}
        <Title order={2} mb={"lg"} align="center">Inventory</Title>
        <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          {cards}
        </SimpleGrid>
      </Container>
    </motion.div>
  );
};

export default Inventory;
