import './App.css'
import Project from "./pages/Project.tsx";
import type {ProjectProps} from "./types/ProjectProps";
import '@mantine/core/styles.css';
import {MantineProvider} from "@mantine/core";
import {useProjects} from "./hooks/useProjects.ts";

function App() {
    // TODO: REMOVE PLACEHOLDER:
    const { projects, loading, error } = useProjects();
    const project: ProjectProps = projects[0];

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <MantineProvider>
            <>
                <Project
                    title={project.title}
                    tags={project.tags}
                    description={project.description}
                    relevantLinks={project.relevantLinks}
                    demoVidLink={project.demoVidLink}
                    srcCodeLink={project.srcCodeLink}
                />
            </>
        </MantineProvider>
    )
}

export default App
