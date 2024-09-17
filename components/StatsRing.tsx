import { RingProgress, Text, SimpleGrid, Paper, Center, Group, Container } from '@mantine/core';
import { IconCar, IconAlertTriangleFilled } from '@tabler/icons-react';

interface StatsRingProps {
    data: {
        label: string;
        stats: string;
        progress: number;
        color: string;
        icon: 'car' | 'alert';
    }[];
}

const icons = {
    car: IconCar,
    alert: IconAlertTriangleFilled,
};

export function StatsRing({ data }: StatsRingProps) {
    const stats = data.map((stat) => {
        const Icon = icons[stat.icon];
        return (
            <Paper withBorder radius="md" p="xs" key={stat.label}>
                <Group>
                    <RingProgress
                        size={80}
                        roundCaps
                        thickness={8}
                        sections={[{ value: stat.progress, color: stat.color }]}
                        label={
                            <Center>
                                <Icon size="1.4rem" stroke={1.5} />
                            </Center>
                        }
                    />

                    <div>
                        <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
                            {stat.label}
                        </Text>
                        <Text weight={700} size="xl">
                            {stat.stats}
                        </Text>
                    </div>
                </Group>
            </Paper>
        );
    });

    return (
        <Container maw={{ base: "90vw", md: "40vw"}} mt={"5vh"}>
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                {stats}
            </SimpleGrid>
        </Container>
    );
}