import {useEffect, useState} from "react";
import type {ProjectProps} from "../types/ProjectProps";

async function loadProjects(): Promise<ProjectProps[]> {
    const response = await fetch("/data/projects.json");

    if (!response.ok) {
        throw new Error("Failed to load projects.json");
    }

    return await response.json();
}

export function GetProjectsDictionary() {
    const [projects, setProjects] = useState<Record<string, ProjectProps>>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        loadProjects()
            .then((data: ProjectProps[]) => {
                const dictionary: Record<string, ProjectProps> =
                    Object.fromEntries(
                        data.map(project => [project.title, project])
                    );

                setProjects(dictionary);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return {projects, loading, error};
}
