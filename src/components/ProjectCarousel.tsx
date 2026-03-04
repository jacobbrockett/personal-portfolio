import classes from "./ProjectCarousel.module.css";
import {Carousel} from '@mantine/carousel';
import {GetProjectsDictionary} from "../hooks/useProjects.ts";
import ProjectCard from "./ProjectCard.tsx";


function ProjectCarousel() {
    const {projects, loading, error} = GetProjectsDictionary();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <div className={classes.carousel}>
                <Carousel
                    slideSize={{base: '50%'}}
                    slideGap={10}
                    emblaOptions={{align: 'start', slidesToScroll: 1}}
                    nextControlProps={{'aria-label': 'Next slide'}}
                    previousControlProps={{'aria-label': 'Previous slide'}}
                >
                    {
                        Object.values(projects).map(project => (
                            <Carousel.Slide key={project.title}>
                                <ProjectCard
                                    title={project.title}
                                    tags={project.tags}
                                    description={project.description}
                                    relevantLinks={project.relevantLinks}
                                    demoVidLink={project.demoVidLink}
                                    srcCodeLink={project.srcCodeLink}
                                />
                            </Carousel.Slide>


                        ))
                    }
                </Carousel>
            </div>


        </>
    );
}

export default ProjectCarousel;