import {GetProjectsDictionary} from "../hooks/useProjects.ts";
import {Container, Grid} from "@mantine/core";
import ProjectCard from "../components/ProjectCard.tsx";
import classes from "./ProjectCardsPage.module.css";


function ProjectCardsPage() {
    const {projects, loading, error} = GetProjectsDictionary();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <Container my="md">
            <Grid columns={12} >
                {
                    Object.values(projects).map(project => (
                        <Grid.Col span={6} className={classes.projectCardGridCol}>
                            <ProjectCard
                                title={project.title}
                                tags={project.tags}
                                description={project.description}
                                relevantLinks={project.relevantLinks}
                                demoVidLink={project.demoVidLink}
                                srcCodeLink={project.srcCodeLink}
                            />
                        </Grid.Col>

                    ))
                }
            </Grid>
        </Container>
    )
}

export default ProjectCardsPage;