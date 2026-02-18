import {Badge, Card, Group, Text} from '@mantine/core';
import classes from './ProjectCard.module.css';
import type {ProjectProps} from "../types/ProjectProps.ts";
import {Link} from "react-router-dom";

// import type {ProjectProps} from "../types/ProjectProps.ts";

function ProjectCard(props: ProjectProps) {
    // Get Props:
    const {title, tags, description} = props;

    return (
        <Card withBorder radius="md" className={classes.card}>
            <Card.Section>
                <Text
                    className={classes.title}
                    component={Link}
                    to={`/project/${title}`}
                >
                    {title}
                </Text>

                <Text fz="sm" lineClamp={4} opacity={0.9}>
                    {description}
                </Text>
            </Card.Section>


            <Group justify="space-between" className={classes.footer}>
                <Group gap="xs">
                    {
                        tags.map(tag => (
                            <Badge size="lg" color="gray">
                                {tag}
                            </Badge>
                        ))
                    }
                </Group>
                {/*TODO: add icons for youtube, github*/}
            </Group>
        </Card>
    );
}

export default ProjectCard;