import './App.css'
import '@mantine/core/styles.css';
import {MantineProvider} from "@mantine/core";
import ProjectListPage from "./pages/ProjectListPage.tsx";

function App() {


    return (
        <MantineProvider>
            <>
                <ProjectListPage/>
            </>
        </MantineProvider>
    )
}

export default App;
