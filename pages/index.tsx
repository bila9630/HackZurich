import { motion } from "framer-motion";
import { useRouter } from 'next/router';
import {
  Card, Container, Grid, Text, Title,
  Image, Button, Space
} from '@mantine/core'
import React, { useContext } from 'react'
import { DatabaseContext } from "../contexts/DatabaseContext";

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
        <Title order={1} align="center" >Verkehrs
          <Text component="span" variant="gradient" gradient={{ from: "#FF0000", to: "#FF7878" }}>
            sense
          </Text>
        </Title>
      </motion.div>


    </Container>
  );
}
