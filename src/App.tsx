import './App.css'
import '@mantine/core/styles.css';
import {MantineProvider} from "@mantine/core";
import { Routes, Route } from "react-router-dom";
import ProjectCardsPage from "./pages/ProjectCardsPage.tsx";
import ProjectPage from "./pages/ProjectPage.tsx";

function App() {

    return (
        <MantineProvider>
            <Routes>
                <Route path="/" element={<ProjectCardsPage/>} />
                <Route path="/project/:id" element={<ProjectPage />} />
            </Routes>
        </MantineProvider>
    )
}

export default App;
