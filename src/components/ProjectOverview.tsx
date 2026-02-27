import classes from './ProjectOverview.module.css'
import {Container, Grid, Badge, Group} from '@mantine/core';
import type {ProjectProps} from "../types/ProjectProps.ts";

function ProjectOverview(props: ProjectProps) {
    // Get Props:
    const {title, tags, description, relevantLinks, demoVidLink, srcCodeLink} = props;

    return (
        <>
            <Container my="md" className={classes.projectContainer}>
                <Grid columns={12} className={classes.projectGrid}>

                    {/*Project Title and Tags:*/}
                    <Grid.Col span={12}>
                        <div className={classes.projectTitle}>
                            <h1>{title}</h1>
                            <Group>
                                {
                                    tags.map(tag => (
                                        <Badge size="lg" color="gray">
                                            {tag}
                                        </Badge>
                                    ))
                                }
                            </Group>
                        </div>
                    </Grid.Col>

                    {/*Project Description and Relevant Links*/}
                    <Grid.Col span={12}>
                        <div className={classes.projectDescription}>
                            <p>{description}</p>

                            {
                                relevantLinks !== undefined && relevantLinks?.length > 0 && (
                                    relevantLinks.map(link => (
                                        <p>{link}</p>
                                    ))
                                )
                            }

                        </div>
                    </Grid.Col>

                    {/*Demo Video and Link to Source Code*/}
                    <Grid.Col span={6}>
                        <div className={classes.projectBox}>
                            <p>{demoVidLink}</p>
                        </div>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <div className={classes.projectBox}>
                            <p>{srcCodeLink}</p>
                        </div>
                    </Grid.Col>
                </Grid>
            </Container>

        </>
    )
}

export default ProjectOverview;