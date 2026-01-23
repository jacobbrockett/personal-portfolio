import './Project.css'
import {Container, Grid, Badge, Group} from '@mantine/core';

function Project() {
    return (
        <>
            <Container my="md" className="project-container">
                <Grid columns={12} className="project-grid">

                    {/*Project Title and Tags:*/}
                    <Grid.Col span={12}>
                        <div className="project-title">
                            <h1>Project Name</h1>
                            <Group>
                                <Badge size="lg" color="gray">
                                    Tag 1
                                </Badge>
                                <Badge size="lg" color="gray">
                                    Tag 2
                                </Badge>
                                <Badge size="lg" color="gray">
                                    Tag 3
                                </Badge>
                            </Group>
                        </div>
                    </Grid.Col>

                    {/*Project Description and Relevant Links*/}
                    <Grid.Col span={12}>
                        <div className="project-description">
                            <p>Description of project</p>
                            <p>Relevant links</p>
                        </div>
                    </Grid.Col>

                    {/*Demo Video and Link to Source Code*/}
                    <Grid.Col span={6}>
                        <div className="project-box">
                            <p>Demo video, pics, etc.</p>
                        </div>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <div className="project-box">
                            <p>Link to source code</p>
                        </div>
                    </Grid.Col>
                </Grid>
            </Container>

        </>
    )
}

export default Project;