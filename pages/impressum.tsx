import { Container, Grid, Text, Title } from '@mantine/core'
import { motion } from "framer-motion"
import React from 'react'

const Impressum = () => {
  return (
    <Container mb={40}>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Grid mt={50} mb={20}>
          <Grid.Col xs={12} md={6}>
            <Title order={1}>Impressum</Title>
          </Grid.Col>
        </Grid>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Grid mb={30}>
          <Grid.Col xs={12} md={8}>
            <Text c={"dimmed"} fz="sm">
              Impressum kommt noch
            </Text>
          </Grid.Col>
        </Grid>
      </motion.div>

    </Container>
  )
}

export default Impressum