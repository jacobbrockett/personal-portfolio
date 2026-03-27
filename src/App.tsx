import './App.css'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import {MantineProvider} from "@mantine/core";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import ProjectCardsPage from "./pages/ProjectCardsPage.tsx";
import ProjectPage from "./pages/ProjectPage.tsx";
import HeaderNavBar from "./components/HeaderNavBar.tsx";
import CareerPage from "./pages/CareerPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";

function App() {

    return (
        <MantineProvider>
            <HeaderNavBar />
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/projects" element={<ProjectCardsPage/>}/>
                <Route path="/projects/:id" element={<ProjectPage />} />
                <Route path="/career" element={<CareerPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </MantineProvider>
    )
}

export default App;
