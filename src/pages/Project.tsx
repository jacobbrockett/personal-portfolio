import './Project.css'
import {Container, Grid, Badge, Group} from '@mantine/core';

export interface ProjectProps {
    title: string;
    tags: string[];
    description: string;
    relevantLinks?: string[];
    demoVidLink: string;
    srcCodeLink: string;
}

// TODO: get project from json
function Project(props: ProjectProps) {
    // Get Props:
    const {title, tags, description, relevantLinks, demoVidLink, srcCodeLink} = props;

    return (
        <>
            <Container my="md" className="project-container">
                <Grid columns={12} className="project-grid">

                    {/*Project Title and Tags:*/}
                    <Grid.Col span={12}>
                        <div className="project-title">
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
                        <div className="project-description">
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
                        <div className="project-box">
                            <p>{demoVidLink}</p>
                        </div>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <div className="project-box">
                            <p>{srcCodeLink}</p>
                        </div>
                    </Grid.Col>
                </Grid>
            </Container>

        </>
    )
}

export default Project;