import {Container} from "@mantine/core";
import Project from "../components/Project.tsx";
import {GetProjectsDictionary} from "../hooks/useProjects.ts";
import { useParams } from "react-router-dom";

function ProjectPage()
{
    // Get Project ID:
    const { id } = useParams<{ id: string }>();

    // Get Projects:
    const {projects, loading, error} = GetProjectsDictionary();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    // Find Project with ID:
    if (!id) {
        return <p>Error: No project ID provided</p>;
    }

    const project = projects[id];

    if (!project)
    {
        return <p>Error: Can not find project with the ID "{id}"</p>;
    }

    return (
        <Container my="md">
            <Project
                title={project.title}
                tags={project.tags}
                description={project.description}
                relevantLinks={project.relevantLinks}
                demoVidLink={project.demoVidLink}
                srcCodeLink={project.srcCodeLink}
            />
        </Container>

    )
}

export default ProjectPage;