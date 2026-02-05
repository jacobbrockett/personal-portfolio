import './App.css'
import Project, {type ProjectProps} from "./pages/Project.tsx";
import '@mantine/core/styles.css';
import {MantineProvider} from "@mantine/core";

function App() {
    // TODO: REMOVE PLACEHOLDER:
    const project: ProjectProps = {
        title: 'Fake Project',
        tags: [
            'Tag 1',
            'Tag 2',
            'Tag 3'
        ],
        description: 'Lorem ipsum dolor sit amet, ' +
            'consectetur adipiscing elit, sed do eiusmod tempor incididunt ' +
            'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ' +
            'nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ' +
            'consequat. Duis aute irure dolor in reprehenderit in voluptate velit ' +
            'esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ' +
            'non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        relevantLinks: [
            'https://www.relevant-link.com/1',
            'https://www.relevant-link.com/2'
        ],
        demoVidLink: 'https://www.youtube.com/myvid',
        srcCodeLink: 'https://www.github.com/jacobbrockett',
    }

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
