// @ts-nocheck
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Title, Text } from '@mantine/core';
import ScratchCard from "react-scratchcard-v2";


const Inventory = () => {
  const [userFound, setUserFound] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Container mih={'80vh'} mt={'5vh'}>
        <Title order={2} mb={"lg"} align="center">Lottery tickets</Title>

        <ScratchCard
          width={280}
          height={140}
          image={"/zone.jpg"}
          finishPercent={60}
          onComplete={() => {
            setUserFound(true);
          }}
        >
          <p>5€ Tax reduction</p>
        </ScratchCard>

        {userFound && <Text align="center">You found a 5€ tax reduction!</Text>}

      </Container>
    </motion.div>
  );
};

export default Inventory;
