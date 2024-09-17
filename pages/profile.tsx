import React from 'react'
import { motion } from "framer-motion";
import {
    Container, Text
} from '@mantine/core'

const Profile = () => {

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <Container mih={"80vh"}>
                {/* Enter your content here */}
                <Text>content</Text>
            </Container>
        </motion.div>
    )
}

export default Profile