// @ts-nocheck
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Container, Title, Text,
  createStyles, SimpleGrid, Card,
  Image, AspectRatio, Center,
  Button, Space
} from '@mantine/core';


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
  const [userFound, setUserFound] = useState(false);

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
        <Button variant="light" fullWidth radius="md">
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
        <Title order={2} mb={"lg"} align="center">Inventory</Title>
        <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          {cards}
        </SimpleGrid>
      </Container>
    </motion.div>
  );
};

export default Inventory;
