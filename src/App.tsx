import './App.css'
import Project from "./pages/Project.tsx";
import '@mantine/core/styles.css';
import {MantineProvider} from "@mantine/core";

function App() {

    return (
        <MantineProvider>
            <>
                <Project/>
            </>
        </MantineProvider>
    )
}

export default App
