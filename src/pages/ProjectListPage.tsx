import Project from "../components/Project.tsx"
import type {ProjectProps} from "../types/ProjectProps";
import {useProjects} from "../hooks/useProjects.ts";


function ProjectListPage() {
    // TODO: REMOVE PLACEHOLDER:
    const {projects, loading, error} = useProjects();
    const project: ProjectProps = projects[0];

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <Project
            title={project.title}
            tags={project.tags}
            description={project.description}
            relevantLinks={project.relevantLinks}
            demoVidLink={project.demoVidLink}
            srcCodeLink={project.srcCodeLink}
        />

    )
}

export default ProjectListPage;