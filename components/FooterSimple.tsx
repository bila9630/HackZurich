import { createStyles, Container, Group, Anchor, Text } from '@mantine/core';
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
    footer: {
        marginTop: 0,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.white,
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
            }`,
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,

        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column',
        },
    },

    links: {
        [theme.fn.smallerThan('xs')]: {
            marginTop: theme.spacing.md,
        },
    },
}));

interface FooterSimpleProps {
    links: { link: string; label: string }[];
}

export function FooterSimple({ links }: FooterSimpleProps) {
    const router = useRouter()
    const { classes } = useStyles();
    const items = links.map((link) => (
        <Anchor<'a'>
            color="dimmed"
            key={link.label}
            href={link.link}
            onClick={(event) => {
                event.preventDefault()
                router.push(link.link)
            }}
            size="sm"
        >
            {link.label}
        </Anchor>
    ));


    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                <Text>© 2023 EcoTrack - Your commute, our commitment</Text>
                <Group className={classes.links}>{items}</Group>
            </Container>
        </div>
    );
}