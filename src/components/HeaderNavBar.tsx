import {Burger, Container, Group} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import classes from './HeaderNavBar.module.css';
import {NavLink} from 'react-router-dom';
import {IconRocket} from '@tabler/icons-react';

const links = [
    {link: '/', label: 'Home'},
    {link: '/projects', label: 'Projects'},
];

function HeaderNavBar() {
    const [opened, {toggle}] = useDisclosure(false);

    const items = links.map((link) => (
        <NavLink
            key={link.label}
            to={link.link}
            className={({isActive}) =>
                `${classes.link} ${isActive ? classes.active : ''}`
            }
        >
            {link.label}
        </NavLink>
    ));

    return (
        <>
            <header className={classes.header}>
                <Container size="md" className={classes.inner}>
                    <IconRocket stroke={2}/>

                    <Group gap={5} visibleFrom="xs">
                        {items}
                    </Group>

                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="xs"
                        size="sm"
                        aria-label="Toggle navigation"/>
                </Container>
            </header>
        </>
    );
}

export default HeaderNavBar;
