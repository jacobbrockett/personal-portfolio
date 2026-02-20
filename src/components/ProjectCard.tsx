import {Badge, Card, Group, Text} from '@mantine/core';
import classes from './ProjectCard.module.css';
import type {ProjectProps} from "../types/ProjectProps.ts";
import {Link} from "react-router-dom";

function ProjectCard(props: ProjectProps) {
    // Get Props:
    const {title, tags, description} = props;

    return (
        <Card withBorder radius="md" className={classes.card}>
            <div className={classes.content}>
                <Text
                    className={classes.title}
                    component={Link}
                    to={`/project/${title}`}
                >
                    {title}
                </Text>

                <Text fz="sm" lineClamp={3} opacity={0.9}>
                    {description}
                </Text>
            </div>

            <hr/>

            <div className={classes.footer}>
                <Group className={classes.footerTags}>
                    {
                        tags.map(tag => (
                                <Badge size="lg" color="gray">
                                    {tag}
                                </Badge>
                            )
                        )
                    }
                </Group>
                {/*TODO: add icons for youtube, github*/}
            </div>

        </Card>
    );
}

export default ProjectCard;