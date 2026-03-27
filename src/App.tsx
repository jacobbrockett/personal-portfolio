import './App.css'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import {MantineProvider} from "@mantine/core";
import {Routes, Route} from "react-router-dom";
import HeaderNavBar from "./components/HeaderNavBar.tsx";
import {PageRoutes, HiddenRoutes} from "./types/WebNavigation.tsx";

function App() {

    return (
        <MantineProvider>
            <HeaderNavBar/>
            <Routes>
                {[...PageRoutes, ...HiddenRoutes].map(({path, component: Component}) => (
                    <Route key={path} path={path} element={<Component/>}/>
                ))}
            </Routes>
        </MantineProvider>
    )
}

export default App;
